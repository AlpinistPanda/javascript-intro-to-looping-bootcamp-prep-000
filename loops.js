function forLoop(array) {
  for (let i = 1; i < 25; i++) {
   array[i] = `I am ${i} strange loop${i === 1 ? '' : 's'}.`
   console.log(array)
}
return array
}

function whileLoop (n) {
  while (n > 0) {
  console.log(--n);
}
  return 'done'
}



function doWhileLoop(num) {
 var i = 0; 
  function incrementVariable() {
  i = i + 1;
  return i;
}
  do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
