function getMinMax(str) {
	let result = {};
 	let arrOfNumbers = str.split(' ').filter(elem => !isNaN(elem));
 	result.min = Math.min.apply(null, arrOfNumbers);
 	result.max = Math.max.apply(null, arrOfNumbers);
 	return result;
}  
