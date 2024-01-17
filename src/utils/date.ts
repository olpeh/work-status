import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const TIME_ZONE = "Europe/Helsinki";

export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "d.M.yyyy");
};

export const getFormattedDateTime = (dateStr: string) => {
  return formatInTimeZone(dateStr, TIME_ZONE, "d.M.yyyy HH:mm");
};
