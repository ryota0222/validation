/**
 * Check if the input value contains spaces or newlines
 * @param {(string | number)} value Input value
 * @returns {*}  {boolean} If true, contains space or a newline
 */
const isValueContainBlank = (value: string | number): boolean => {
  return !String(value) || !String(value).match(/\S/g);
};

/**
 * Check if input value is numeric
 * @param {(string | number)} value Input value
 * @returns {*}  {boolean} If true, input value is numeric
 */
const isValueNumber = (value: string | number): boolean => {
  const regex = /^[+,-]?([1-9]\d*|0)(\.\d+)?$/;
  return regex.test(String(value));
};

/**
 * Check if input value is an integer
 * @param {(string | number)} value Input value
 * @returns {*}  {boolean} If true, input value is an integer
 */
const isValueInteger = (value: string | number): boolean => {
  return Number.isInteger(Number(value));
};

/**
 * Check if the input value exists
 * @param {(string | number)} value Input value
 * @returns {*}  {boolean} If true, input value is an empty character
 */
const isValueEmpty = (value: string | number): boolean => {
  return !!String(value).trim().length;
};

/**
 * Check if the input value exceeds the maximum number of characters
 * @param {(string | number)} value Input value
 * @param {number} maxLength maximum number of characters
 * @returns {*}  {boolean} If true, input value exceeds the maximum number of characters
 */
const isValueExceedMaxNumber = (
  value: string | number,
  maxLength: number
): boolean => {
  return String(value).length > maxLength;
};

/**
 * Check if the input value is between the target range
 * @param {(string | number)} value Input value
 * @param {number} min Minimum value of range
 * @param {number} max Maximum value of range
 * @returns {*}  {boolean} If true, input value is between the target range
 */
const isValueBetweenRange = (
  value: string | number,
  min: number,
  max: number
): boolean => {
  if (typeof +value === "number") {
    return min <= +value && +value <= max;
  }
  return false;
};

/**
 * Check if the input value is greater than or equal to the number of target digits
 * @param {(string | number)} value Input value
 * @param {number} digit number of target digits
 * @returns {*}  {boolean} If true, input value is greater than or equal to the number of target digits
 */
const isValueGteTargetDigits = (
  value: string | number,
  digit: number
): boolean => {
  if (typeof +value === "number") {
    return String(Math.floor(+value)).length >= digit;
  }
  return false;
};

/**
 * Check if the minority of the input value is greater than or equal to the target number of digits.
 * @param {(string | number)} value Input value
 * @param {number} digit number of target digits
 * @returns {*}  {boolean} If true, the minority of the input value is greater than or equal to the target number of digits.
 */
const isMinorityOfValueGteTargetDigits = (
  value: string | number,
  digit: number
): boolean => {
  const num = +value;
  if (typeof num === "number") {
    return num.toString().split(".")[1].length >= digit;
  }
  return false;
};

export {
  isValueContainBlank,
  isValueNumber,
  isValueInteger,
  isValueEmpty,
  isValueExceedMaxNumber,
  isValueBetweenRange,
  isValueGteTargetDigits,
  isMinorityOfValueGteTargetDigits,
};
