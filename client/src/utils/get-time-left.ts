import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const soonClosingText = "Se cloture dans";

export const getTimeLeft = (closingDate: string) => {
  const endDate = new Date(closingDate);

  const daysLeft = differenceInDays(endDate, new Date());
  if (daysLeft < 30)
    return `${soonClosingText} ${daysLeft} jour${daysLeft > 1 ? "s" : ""}`;

  const monthsLeft = differenceInMonths(endDate, new Date());
  if (monthsLeft < 12) return `${soonClosingText} ${monthsLeft} mois`;

  const yearsLeft = differenceInYears(endDate, new Date());
  return `${soonClosingText} ${yearsLeft} an${yearsLeft > 1 ? "s" : ""}`;
};
