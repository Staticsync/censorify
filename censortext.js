var  censoreWord = ["sad","bad","mad"];

var customCensoreWord = [];

function censor(inStr) {
  for(idx in censoreWord){
    inStr  = inStr.replace(censoreWord[ddx],"****");
  }
  for(idx in customCensoreWord){
    inStr = inStr.replace(customCensoreWord[idx],"****");
  }
  return inStr;
}
function addCensoreWord(word) {
 customCensoreWord.push(word);  
}
function getCensoreWords() {
  return censoreWord.concat(customCensoreWord);
}
exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWords = getCensoreWords;