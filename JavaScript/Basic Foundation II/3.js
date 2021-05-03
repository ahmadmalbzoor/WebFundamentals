function print()
{
	var arr=[1,2,3,4,5,3]
  var x;
  x=arr[0];
  for(var i=1;i<arr.length;i++)
  {
   console.log(arr[i]);
  }
  return x;
}
var y=print();
console.log(y);