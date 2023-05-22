// configures and returns a function for react-hook-form
// that tests if the field isn't just blank characters

export const nonBlankField =
  (errorMessage: string): ((fieldValue: string) => boolean | string) =>
  (fieldValue: string) =>
    !/^\s*$/.test(fieldValue) || errorMessage;

// configures and returns a function for react-hook-form
// that tests if the field is composed of just numbers
export const justNumbers =
  (errorMessage: string): ((fieldValue: string) => boolean | string) =>
  (fieldValue: string) =>
    /^\d+$/.test(fieldValue) || errorMessage;

export const dob = (value: string, setError: () => void) => {
  const [month, day, year] = value.split("/");
  const currentYear = new Date().getFullYear();
  if (Number(month) > 12 || Number(month) < 1) setError();
  if (Number(day) > 31 || Number(day) < 1) setError();
  if (Number(year) > currentYear || Number(year) < 1900) setError();
};

export function debounce<Params extends any[]>(
  fn: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}
