import { cpus } from "os";
import type { MaybeAsyncIterable, MaybePromiseLike } from "./types";

export const PARALLEL_COUNT = Math.max(cpus().length - 1, 2);

export type ParallelMapOptions = {
  /**
   * - `true` or undefined - automatically parallelize based on cpu count
   * - `false` or 1, 0 - do not parallelize. Execute map sequentially
   * - any other number - parallelize by this number
   */
  parallel?: number | boolean;
};

/**
 *
 *
 * @param {number|boolean} parallel
 * @return {number}  {number}
 */
function normalizeParallelValue(
  parallel: ParallelMapOptions["parallel"]
): number {
  if (parallel === true || parallel === undefined) {
    return PARALLEL_COUNT;
  } else if (parallel === false || parallel === 0) {
    return 1;
  } else {
    return Math.round(Math.abs(parallel));
  }
}

/**
 *
 *
 * @export
 * @template A
 * @template B
 * @param {Iterable<A>} data
 * @param {function(value: A): PromiseLike<B>} map
 * @param {ParallelMapOptions} [options={}]
 * @return {Promise<PromiseSettledResult<B>[]>}
 */
export async function parallelMap<A, B>(
  data: Iterable<A>,
  map: (value: A) => B | PromiseLike<B>,
  options: ParallelMapOptions = {}
): Promise<PromiseSettledResult<B>[]> {
  const results: PromiseSettledResult<B>[] = [];
  const inputs = [...data];

  while (inputs.length > 0) {
    const batch = inputs.splice(0, normalizeParallelValue(options.parallel));
    const promises = batch.map(async (value) => await map(value));
    const settled = await Promise.allSettled(promises);

    results.push(...settled);
  }

  return results;
}

/**
 *
 *
 * @export
 * @template T
 * @param {PromiseSettledResult<T>[]} results
 * @return {T}  {T}
 */
export function getMultiTryResult<T>(results: PromiseSettledResult<T>[]): T {
  const result = results.find(
    (r): r is PromiseFulfilledResult<T> => r.status === "fulfilled"
  );

  if (result) {
    return result.value;
  }

  throw results[0];
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export type ThreadedMapOptions<A, B> = {
  onValue?: (value: B, input: A) => any;
  onError?: (error: unknown, input: A) => any;
  key?: (value: A) => unknown;
} & ParallelMapOptions;

/**
 *
 *
 * @export
 * @template A
 * @template B
 * @param {MaybeAsyncIterable<A>} input
 * @param {function(input: A): MaybePromiseLike<B>} map
 * @param {ThreadedMapOptions<A, B>} [options={}]
 * @return {AsyncIterable<B>}  {AsyncIterable<B>}
 */
export async function* threadedMap<A, B>(
  input: MaybeAsyncIterable<A>,
  map: (input: A) => MaybePromiseLike<B>,
  options: ThreadedMapOptions<A, B> = {}
): AsyncIterable<B> {
  const processed = new Set<unknown>();
  const queue: A[] = [];
  const results: B[] = [];
  let inputEnded = false;

  const read = async () => {
    try {
      for await (const value of input) {
        const key = options.key ?? ((a) => a);
        const id = key(value);

        if (processed.has(id)) {
          continue;
        }

        queue.push(value);
        processed.add(id);
      }
    } finally {
      inputEnded = true;
    }
  };

  const process = async () => {
    while (!inputEnded || queue.length > 0) {
      const value = queue.shift();

      if (!value) {
        await sleep(50);
        continue;
      }
      try {
        const result = await map(value);
        options.onValue?.(result, value);
        results.push(result);
      } catch (error) {
        options.onError?.(error, value);
      }
    }
  };

  const threads = Array.from(
    { length: normalizeParallelValue(options.parallel) },
    process
  );

  threads.push(read());

  while (!inputEnded || queue.length > 0) {
    const slice = results.splice(0);

    if (slice.length === 0) {
      await sleep(10);
      continue;
    }

    yield* slice;
  }

  await Promise.all(threads);
  yield* results;
}
