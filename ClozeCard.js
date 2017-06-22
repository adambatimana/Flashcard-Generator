let ClozeCard = function(text,cloze){
  this.partial = cloze,
  this.fullText = text,
  this.cloze = cloze
  // if (!cloze) {
  //   throw
  // }
}

module.exports = ClozeCard;
