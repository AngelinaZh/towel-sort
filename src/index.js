
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let b = matrix;
  for(let i = 0; i < b.length; i++){
  if (i%2 == 1){
   b[i].reverse();
}else{
  b[i];
}

  }
return Array.prototype.concat.apply([], b);
  }

