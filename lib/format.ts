export function usd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function replies(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}
