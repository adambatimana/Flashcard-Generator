const basicCard = require('./BasicCard.js')
const clozeCard = require('./ClozeCard.js')

// =========================================================
// ==================== Basic Card =========================
// =========================================================

let firstPres = new basicCard (
  "who was the first president of the U.S.?",
  "George Washington"
);

//who was the first president of the US?
console.log(firstPres.front)

//George Washington
console.log(firstPres.back)


// =========================================================
// ==================== cloze Card =========================
// =========================================================
// let firstPres = new clozeCard (
//   "George Washington was the first president of the U.S.",
//   "George Washington"
// );
