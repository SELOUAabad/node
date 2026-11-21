var generator = require("generate-password");

var password = generator.generate({
  length: 15,
  numbers: true,
  excludeSimilarCharacters: true,
  symbols: true,
});

console.log(password);
