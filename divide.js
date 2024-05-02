const divide = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  if (min === 0) {
    throw new Error("Cannot divide by zero");
  }
  return max / min;
};

module.exports = divide;
