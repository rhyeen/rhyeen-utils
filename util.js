export const roundToSingleDecimalString = (num) => {
  return _roundToNDecimals(num, 1);
};

export const roundToTwoDecimalsString = (num) => {
  return _roundToNDecimals(num, 2);
};

export const roundToThreeDecimalsString = (num) => {
  return _roundToNDecimals(num, 3);
};

/**
 * See http://www.jacklmoore.com/notes/rounding-in-javascript/
 */
function _roundToNDecimals(value, decimals) {
  let decimalString = Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
  if (decimalString.substr(-1) === '0') {
    if (decimalString.substr(-3) === '.00') {
      return decimalString.substr(0, decimalString.length - 3);
    }
    return decimalString.substr(0, decimalString.length - 1);
  }
  return decimalString;
}

export const deepCopy = (arg) => {
  return JSON.parse(JSON.stringify(arg));
}