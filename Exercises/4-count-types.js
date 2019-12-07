'use strict';

const arr = [11, false, true, 134, undefined];

const countTypesInArray = arr => {
  let obj = {};
  for (let item of arr) {
   const i = typeof item;
    if (obj.hasOwnProperty(i)) {
      ++obj[i];
    } else {
      obj[i]=1;
    }
  }
  return obj;
};

console.log(countTypesInArray(arr));

module.exports = { countTypesInArray };
