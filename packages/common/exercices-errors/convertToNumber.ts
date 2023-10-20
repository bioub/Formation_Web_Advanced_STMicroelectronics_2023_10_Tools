export function convertToNumber(value: string) {
  const nb = parseInt(value, 10);

  if (isNaN(nb)) {
    throw new Error(`Erreur : "${value}" n'est pas un nombre`);
  }

  return nb;
}
