import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  startOfDay
} from "date-fns";

const closingText = "Cloturée il y a";

export const getTimeConsume = (endDate: string) => {
  const today = startOfDay(new Date());
  const formattedEndDate = startOfDay(endDate)

  const daysAgo = differenceInDays(today, formattedEndDate);
  if (daysAgo < 30) {
    return `${closingText} ${daysAgo} jour${daysAgo > 1 ? "s" : ""}`;
  }

  const monthsAgo = differenceInMonths(today, formattedEndDate);
  if (monthsAgo < 12) {
    return `${closingText} ${monthsAgo} mois`;
  }

  const yearsAgo = differenceInYears(today, formattedEndDate);
  if (yearsAgo < 12) {
    return `${closingText} ${yearsAgo} an${yearsAgo > 1 ? "s" : ""}`;
  }
};
