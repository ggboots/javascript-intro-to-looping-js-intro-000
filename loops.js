function forLoop(array){
  for(let i= 0; i < 25; i++){
    if(i === 1){
      array.push('I Am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array;
}

function whileLoop(num){
  while(num != 0){
    console.log(num)
    num -=1
  }
  return 'done';

}
