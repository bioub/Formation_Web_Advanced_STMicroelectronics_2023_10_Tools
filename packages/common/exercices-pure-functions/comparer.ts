export function comparer(nb1: number, nb2: number) {
  if (nb1 < nb2) {
    return 'Trop petit';
  } else if (nb1 > nb2) {
    return 'Trop grand';
  } else {
    return 'Gagné';
  }
}
