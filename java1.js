const centeredPyramid = (string, num, boolean) => {
    let result = "\n";
    if(!boolean){
    for(let i=1; i <= num; i++ ){
        for(let j = 0; j < num - i; j++){
            result += " ";
        }
        for(let k = 0; k < (2*i - 1); k++){
            result += string;
        }
        result += "\n";
    }
    return result
 }else{
    for(let i=num; i >= num; i-- ){
        for(let j = 0; j < num - i; j++){
            result += " ";
        }
        for(let k = 0; k < (2*i - 1); k++){
            result += string;
        }
        result += "\n";
    }
    return result;
  }
 };
  console.log(centeredPyramid("o", 4, false));
