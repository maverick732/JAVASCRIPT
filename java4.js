const bouncer = item => {
  let filteredItems = []
  for(let i = 0; i < item.length; i++){
    if(item[i]){
      filteredItems.push(item[i])
    }
 }
 return filteredItems
}

console.log(bouncer([7, "ate", "", false, 9]))