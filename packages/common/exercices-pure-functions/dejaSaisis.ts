export function dejaSaisis(nbs: number[]) {
  if (!nbs.length) {
    return;
  }

  return 'Vous avez déjà saisi : ' + nbs.join(' | ');
}
