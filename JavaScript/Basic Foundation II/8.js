function print()
{
	var arr=["ahmad","moayyad","bzoor","coding"];
  var x=0,y;
  for(var i=arr.length-1;i>0;i--)
  {
  	x=arr[i];
    y=x.length;
  	arr[i]=y;
  }
  return arr;
  
}
console.log(print())