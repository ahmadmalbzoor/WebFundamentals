function print()
{
	var arr=[-1,-1,3,4],x=0;
  for(var i=0;i<arr.length;i++)
  {
  	if(arr[i]>0)
    x++;
  }
  arr[arr.length-1]=x;
  return arr;
}
console.log(print())