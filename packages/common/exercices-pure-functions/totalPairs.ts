/**
 * Retourne le total de nombre impairs dans un tableau
 * @param nbs
 * @returns
 */
export function totalPairs(nbs: number[]) {
  return nbs.filter((nb) => nb % 2 === 0).length;
}
