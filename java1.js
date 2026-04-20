const centeredPyramid = (string, num, boolean) => {
    let result = "\n";
    if(!boolean){
    for(let i=1; i <= num; i++ ){
        for(let j = 0; j < num - i; j++){
            result += " ";
        }
        for(let d = 0; d < (2*i - 1); d++){
            result += string;
        }
        result += "\n";
    }
    return result
 }
 else{
    for(let i=num; i >= 1; i-- ){
        for(let j = 0; j < num - i; j++){
            result += " ";
        }
        for(let d = 0; d < (2*i - 1); d++){
            result += string;
        }
        result += "\n";
    }
    return result;
  } 
 };
  console.log(centeredPyramid("o", 10, true));
