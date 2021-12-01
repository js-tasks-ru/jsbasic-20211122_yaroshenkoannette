function showSalary(users, age) {
 let personsSalary;
	users.forEach(function(user, index){

		if (user.age <= age) {
			personsSalary ? personsSalary = personsSalary+'\n': personsSalary = '';
			personsSalary = personsSalary + user.name + ', ' + user.balance;
		}
	})
	return personsSalary;
}
