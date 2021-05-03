function print()
{
	var arr=[1,2,3];
  var x=[],y;
  for(var i=0;i<arr.length;i++)
  {
  	y=arr[i]+7;
    x.push(y);
  }
  return x;
}
console.log(print())