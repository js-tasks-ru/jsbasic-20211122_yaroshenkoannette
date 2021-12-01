function namify(users) {
  let arrOfNames =[];
  users.forEach(function(item, index, array){
  	arrOfNames.push(item.name);
  });
  return arrOfNames;
}
