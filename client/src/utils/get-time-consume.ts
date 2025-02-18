import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const closingText = "Cloturée il y a";

export const getTimeConsume = (endDate: string) => {
  const now = new Date();

  const daysAgo = differenceInDays(now, endDate);
  if (daysAgo < 30) {
    return `${closingText} ${daysAgo} jour${daysAgo > 1 ? "s" : ""}`;
  }

  const monthsAgo = differenceInMonths(now, endDate);
  if (monthsAgo < 12) {
    return `${closingText} ${monthsAgo} mois`;
  }

  const yearsAgo = differenceInYears(now, endDate);
  if (yearsAgo < 12) {
    return `${closingText} ${yearsAgo} an${yearsAgo > 1 ? "s" : ""}`;
  }
};
