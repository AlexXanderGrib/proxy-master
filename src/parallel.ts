import { cpus } from "node:os";

const PARALLEL_COUNT = Math.max(cpus().length - 1, 2);

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

  let parallel: number;

  if (options.parallel === true || options.parallel === undefined) {
    parallel = PARALLEL_COUNT;
  } else if (options.parallel === false || options.parallel === 0) {
    parallel = 1;
  } else {
    parallel = options.parallel;
  }

  while (inputs.length > 0) {
    const batch = inputs.splice(0, parallel);
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
