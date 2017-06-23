let ClozeCard = function(text,cloze,err){
  if (err) throw err;
  if(this instanceof ClozeCard){
  this.partial = ("..." + text.split(cloze)),
  this.fullText = text,
  this.cloze = cloze
}
    else {
      return new CloseCard (text,cloze)
    }
}

module.exports = ClozeCard;
