function makeFriendsList(friends) {
  let ul = document.createElement('ul');
	friends.forEach(function(item, index){
		let li = document.createElement('li');
		li.innerText = item.firstName + " " + item.lastName;
		ul.appendChild(li);
	})
	return ul;
}
