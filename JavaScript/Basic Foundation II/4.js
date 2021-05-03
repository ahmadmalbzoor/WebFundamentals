function print()
{
	var arr=[1,2,3], newarr=[],x;
  for(var i=0;i<arr.length;i++)
  {
  		x=arr[i]*arr[i];
      newarr.push(x)
  }
  return newarr;
  
}
console.log(print())