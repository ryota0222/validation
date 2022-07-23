/**
 * Checks if the input value is a space or a newline
 * @param {(string | number)} value Target value
 * @returns {*}  {boolean} If true, contains space or a newline
 */
const isValueBlank = (value: string | number): boolean => {
  return !String(value) || !String(value).match(/\S/g);
};
