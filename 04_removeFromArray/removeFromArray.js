const removeFromArray = function (([1, 2, 3, 4], 3), 3) {
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
