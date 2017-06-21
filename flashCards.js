const basicCard = require('./BasicCard.js')
const clozeCard = require('./ClozeCard.js')


let firstPres = new basicCard (
  "who was the first president of the U.S.?",
  "George Washington"
);

let firstPres = new clozeCard (
  "George Washington was the first president of the U.S.",
  "George Washington"
);
