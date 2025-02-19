export const formatPrice = (amount: number) => {
  if (isNaN(amount)) return "0";

  const roundedAmount = Math.round(amount * 100) / 100;

  if (Number.isInteger(roundedAmount)) {
    return roundedAmount.toString();
  }

  return roundedAmount.toFixed(2).replace(".", ",");
};
