import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const TIME_ZONE = "Europe/Helsinki";

export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "d.M.yyyy");
};

export const getFormattedDateTime = (dateStr: string) => {
  const dateInCorrectTimeZone = utcToZonedTime(dateStr, TIME_ZONE);
  return format(dateInCorrectTimeZone, "d.M.yyyy HH:mm");
};
