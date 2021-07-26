const statement = "JavaScript is a programming language for everything.";

const findLongestWord = (statement) => {
  let words = statement.split(" ");
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};
