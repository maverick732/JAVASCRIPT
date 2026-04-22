function uniteUnique (...arrays) {
  let newArray = []
  for(let i = 0; i < arrays.length; i++){
    for(let k = 0; k < arrays[i].length; k++){
      if(!newArray.includes(arrays[i][k])){
        newArray.push(arrays[i][k])
      }
    }
  }
  return newArray
}
