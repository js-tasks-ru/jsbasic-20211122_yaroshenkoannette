function makeDiagonalRed(table) {
	for(let indexOfElem = 0; indexOfElem < table.rows.length; indexOfElem ++){
  	table.rows[indexOfElem].cells[indexOfElem].style.backgroundColor = 'red';
  }
}
