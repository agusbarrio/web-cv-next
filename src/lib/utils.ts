import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateString({
  startDate,
  endDate,
  format = "MM/YYYY",
}: {
  startDate: string;
  endDate?: string;
  format?: string;
}) {
  const start = moment(startDate);
  const end = endDate ? moment(endDate) : undefined;

  return `${start.format(format)} - ${end ? end.format(format) : "Actualidad"}`;
}
