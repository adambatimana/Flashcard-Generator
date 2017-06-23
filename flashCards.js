const basicCard = require('./BasicCard.js')
const clozeCard = require('./ClozeCard.js')

// =========================================================
// ==================== Basic Card =========================
// =========================================================

let jasonTodd = new basicCard (
  "Who is behind the Red Hood Mask?",
  "Jason Todd"
);

//WHO IS RED HOOD?
console.log(jasonTodd.front)
console.log(jasonTodd.back)


// =========================================================
// ==================== cloze Card =========================
// =========================================================
let jasonToddCloze = new clozeCard (
  "Jason Todd is behind the Red Hood mask",
  "Jason Todd"
);

//"Jason Todd"
console.log(jasonToddCloze.cloze)
//"....is behind the Red Hood Mask"
console.log(jasonToddCloze.partial)
//"Jason Todd is behind the Red Hood mask"
console.log(jasonToddCloze.fullText)
