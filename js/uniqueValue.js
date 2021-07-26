const names = [
  "pouria",
  "hamed",
  "hamed",
  "hamed",
  "maryam",
  "delaram",
  "delaram",
];

const uniqueValues = (array) => {
  let collection = [];
  let noUniqueItems = [];

  array.forEach((item) => {
    if (!collection.includes(item)) {
      if (!noUniqueItems.includes(item)) {
        collection.push(item);
      }
    } else {
      // remove repeated values
      collection.pop();
      noUniqueItems.push(item);
    }
  });

  return collection;
};

const unUniqueValues = (array) => {
  let collection = [];
  let unUnique = [];

  array.forEach((item) => {
    if (!collection.includes(item)) {
      // unique values
      collection.push(item);
    } else {
      // no unique values
      unUnique.push(collection.pop());
    }
  });

  return unUnique;
};
