import { format } from "date-fns";

export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "d.M.yyyy");
};

export const getFormattedDateTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, "d.M.yyyy HH:mm");
};
