function moveZeros(arr) {
  let newArr = []
  let zeroCounter = 0;
  
  for(i=0; i<=arr.length; i++){
    
    if(i === arr.length){
      for(j=0; j<zeroCounter; j++){
        newArr.push(0)
      }
    } 
    else if(i < arr.length){
      if(arr[i] !== 0){
        newArr.push(arr[i])
      }
      else {
        zeroCounter++
      }
    }
    
  }
  
  return newArr
}