let ClozeCard = function(text,cloze){
  this.partial = ("..." + text.split(cloze)),
  this.fullText = text,
  this.cloze = cloze
  // if (!cloze) {
  //   throw
  // }
}

module.exports = ClozeCard;
