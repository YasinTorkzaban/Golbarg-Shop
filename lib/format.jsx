// price into Fa
export function formatPrice(price) {
  return `${Number(price).toLocaleString("fa-IR")} تومان`;
}

export function toFa(number) {
  return Number(number).toLocaleString("fa-IR");
}
