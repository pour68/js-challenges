const numbers = [8, 6, 8, 11, 25, 11, 25, 17, 15, 16];

let counts = numbers.reduce(
  (total, value, index, array) =>
    total + (value === array[index + 2] && value !== array[index + 1]),
  0
);
