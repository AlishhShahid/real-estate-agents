export function formatPricePKR(price: number | string): string {
  const numPrice = Number(price);
  if (isNaN(numPrice)) return String(price);

  if (numPrice >= 10000000) {
    const crore = numPrice / 10000000;
    return `PKR ${parseFloat(crore.toFixed(2))} Crore`;
  } else if (numPrice >= 100000) {
    const lakh = numPrice / 100000;
    return `PKR ${parseFloat(lakh.toFixed(2))} Lakh`;
  } else {
    return `PKR ${numPrice.toLocaleString()}`;
  }
}
