function highlight(table) {
	//add class or attribute depending on value of "Status"
	let arrOfTdWithStatus= Array.from(table.querySelectorAll('tbody > tr > td:last-child')); 
	arrOfTdWithStatus.forEach(function(td){
		if (td.getAttribute('data-available') === 'true'){
			td.parentNode.classList.add('available');
		} else if (td.getAttribute('data-available') === 'false'){
			td.parentNode.classList.add('unavailable');
		} else { td.parentNode.setAttribute('hidden', true)}
	})
 	// add class depending on value of "Gender" & check if "Age" under 18
 	let arrOfTd = Array.from(table.querySelectorAll('tbody > tr > td'));
 	arrOfTd.forEach(function(td){
 		if(td.textContent === 'm'){
 			td.parentNode.classList.add('male');
 		} else if (td.textContent === 'f'){
 			td.parentNode.classList.add('female');
 		} else if (td.textContent < 18){
 			td.parentNode.style="text-decoration: line-through"
 		}	
 	})
}
