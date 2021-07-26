const isEven = (number) => number % 2 === 0;

const total = (array) => {
  return array.reduce((total, number) => total + number, 0);
};
