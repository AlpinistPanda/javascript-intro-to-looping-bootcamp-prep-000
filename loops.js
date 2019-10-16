function forLoop(array) {
  for (let i = 0; i < 25; i++) {
   array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
}
return array
}

function whileLoop (n) {
  while (n > 0) {
  console.log(--n);
}
  return 'done'
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < num);
}
