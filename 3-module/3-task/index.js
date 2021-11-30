function camelize(str) {
  let arrOfWords = str.split('-');
	return arrOfWords.reduce((concatenatedStr, word, index)=>(index==0 ?  word : concatenatedStr + word[0].toUpperCase() + word.slice(1)))
} 




