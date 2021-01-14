const toStringArray = (str) => {
  return [...str];
  //   [...str];
  //   return this;
};

const toIntArray = (arr) => {
  return arr.map((num) => parseInt(num));
  //   arr.map((num) => parseInt(num));
  //   return this;
};

const getEvens = (arr) => {
  return arr.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  //    this;
};
// export { toStringArray, toIntArray, getEvens };
const str = "1234567890";
// console.log(toStringArray(str).toIntArray(str).getEvens(str));

// let strArray = toStringArray(str);
// let intArray = toIntArray(strArray);
// let evens = getEvens(intArray);
// console.log(evens);
// console.log(getEvens(toIntArray(toStringArray(str))));
