export function racineCarre(nb: number) {
  if (nb < 0) {
    throw new Error('nb must be positive');
  }

  return Math.sqrt(nb);
}
