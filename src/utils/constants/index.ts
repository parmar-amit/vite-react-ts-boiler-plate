// declare common input eerror messages types
interface ICommonInputErrorMessages {
  invalid: string;
  required: string;
  min: string;
  max: string;
  minLength: string;
  maxLength: string;
  pattern: string;
  email: string;
  url: string;
  date: string;
  dateISO: string;
  number: string;
  digits: string;
  creditcard: string;
  equalTo: string;
  notEqualTo: string;
  remote: string;
}

// declare common input error messages
export const commonInputErrorMessages: ICommonInputErrorMessages = {
  invalid: "Invalid value",
  required: "This field is required",
  min: "Please enter a value greater than or equal to {0}",
  max: "Please enter a value less than or equal to {0}",
  minLength: "Please enter at least {0} characters",
  maxLength: "Please enter no more than {0} characters",
  pattern: "Invalid format",
  email: "Please enter a valid email address",
  url: "Please enter a valid URL",
  date: "Please enter a valid date",
  dateISO: "Please enter a valid date ( ISO )",
  number: "Please enter a valid number",
  digits: "Please enter only digits",
  creditcard: "Please enter a valid credit card number",
  equalTo: "Please enter the same value again",
  notEqualTo: "Please enter a different value",
  remote: "Please fix this field",
};
