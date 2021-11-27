function sumSalary(salaries) {
  let sumOfSalaries = 0;
	for (key in salaries){
		if (isFinite(salaries[key])) {
			sumOfSalaries = sumOfSalaries + salaries[key];
		}
	}
	return sumOfSalaries;
}
