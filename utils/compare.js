const isString = (param) => {
  return typeof param === "string";
};

const compareString = (leftString, rightString) => {
  if (!isString(leftString) || !isString(rightString)) {
    return false;
  }

  return leftString.toUpperCase() === rightString.toUpperCase();
};

const compareStringInArray = (str, arr) => {
  if (!str || !Array.isArray(arr)) {
    return false;
  }

  let findItem = arr.filter((item) => compareString(item, str));

  return findItem.length > 0;
};

module.exports = { compareString, compareStringInArray };
