'use strict';

const increaseSum = (array) => {
  const generatedNumber = Math.round(Math.random() * 10);
  array.push(generatedNumber);
  const totalSumArrayElements = array.reduce((total, item) => total + item, 0);
  if (totalSumArrayElements < 50) {
    return increaseSum(array);
  }
  return totalSumArrayElements;
};

//increaseSum();