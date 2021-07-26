const statement = "JavaScript is a great programming language.";

const capitalize = (statement) => {
  const words = statement.split(" ");

  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1)
  );

  return capitalizedWords.join(" ");
};
