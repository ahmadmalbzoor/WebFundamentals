function print()
 {
  var arr=[1,-1,3];
  for(var i=0;i<arr.length;i++)
  {
  if(arr[i]>0)
  {
  arr[i]*=-1;
  }
  }
  return arr;
 }
console.log(print())