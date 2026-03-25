const pad = (value: number): string => {
  const normalized = String(value);
  return normalized.length === 1 ? `0${normalized}` : normalized;
};

const buildDMY = (day: number, month: number, year: number): string =>
  `${pad(day)}/${pad(month)}/${year}`;

const isValidDate = (year: number, month: number, day: number): boolean => {
  const candidate = new Date(year, month - 1, day);
  return (
    !isNaN(candidate.getTime()) &&
    candidate.getFullYear() === year &&
    candidate.getMonth() === month - 1 &&
    candidate.getDate() === day
  );
};

export const formatDateToDMY = (rawDate?: string | null): string => {
  if (!rawDate) return "";

  const value = rawDate.trim();

  if (/^\d{8}$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6));
    const day = Number(value.slice(6, 8));

    if (!isValidDate(year, month, day)) return value;
    return buildDMY(day, month, year);
  }

  const parsed = new Date(value);
  if (isNaN(parsed.getTime())) return value;

  return buildDMY(parsed.getDate(), parsed.getMonth() + 1, parsed.getFullYear());
};
