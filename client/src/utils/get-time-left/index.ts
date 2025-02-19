import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  startOfDay,
} from "date-fns";

const soonClosingText = "Se cloture dans";

export const getTimeLeft = (closingDate: string) => {
  const endDate = startOfDay(new Date(closingDate));
  const today = startOfDay(new Date());

  const daysLeft = differenceInDays(endDate, today);
  if (daysLeft < 30)
    return `${soonClosingText} ${daysLeft} jour${daysLeft > 1 ? "s" : ""}`;

  const monthsLeft = differenceInMonths(endDate, today);
  if (monthsLeft < 12) return `${soonClosingText} ${monthsLeft} mois`;

  const yearsLeft = differenceInYears(endDate, today);
  return `${soonClosingText} ${yearsLeft} an${yearsLeft > 1 ? "s" : ""}`;
};
