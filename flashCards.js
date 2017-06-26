const basicCard = require('./BasicCard.js')
const clozeCard = require('./ClozeCard.js')

// =========================================================
// ==================== Basic Card =========================
// =========================================================

let createBatman = basicCard (
  "Who created Batman comics?",
  "Bob Kane"
);

console.log("==========================================")
console.log(createBatman.front)
console.log(createBatman.back)

let jasonTodd = new basicCard (
  "Who is behind the Red Hood Mask?",
  "Jason Todd"
);

//WHO IS RED HOOD?
console.log("==========================================")
console.log(jasonTodd.front)
console.log(jasonTodd.back)

let DamianWayne = new basicCard (
  "Which Robin is Batman's son?",
  "Damian Wayne"
);

console.log("==========================================")
console.log(DamianWayne.front)
console.log(DamianWayne.back)

let theFlash = new basicCard (
  "Who is the Fastest man alive?",
  "The Flash"
);

console.log("==========================================")
console.log(theFlash.front)
console.log(theFlash.back)



console.log("==========================================")

// =========================================================
// ==================== cloze Card =========================
// =========================================================
let jasonToddCloze = new clozeCard (
  "Jason Todd is behind the Red Hood mask",
  "Jason Todd"
);

console.log("==========================================")

//"Jason Todd"
console.log(jasonToddCloze.cloze)
//"....is behind the Red Hood Mask"
console.log(jasonToddCloze.partial)

console.log("==========================================")

//"Jason Todd is behind the Red Hood mask"
console.log(jasonToddCloze.fullText)

let createBatmanCloze = new clozeCard (
  "Bob Kane created Batman comics",
  "Bob Kane"
);

console.log("==========================================")

console.log(createBatmanCloze.cloze)
console.log(createBatmanCloze.partial)

console.log("==========================================")

console.log(createBatmanCloze.fullText)

let damianWayneCloze = new clozeCard (
  "Damian Wayne is the Robin who is Batman's Son",
  "Damian Wayne"
);

console.log("==========================================")

console.log(damianWayneCloze.cloze)
console.log(damianWayneCloze.partial)

console.log("==========================================")

console.log(damianWayneCloze.fullText)

let theFlashCloze = new clozeCard (
  "The Flash is the fastest man alive",
  "The Flash"
);

console.log("==========================================")

console.log(theFlashCloze.cloze)
console.log(theFlashCloze.partial)

console.log("==========================================")

console.log(theFlashCloze.fullText)
