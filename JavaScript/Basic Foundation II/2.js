function print()
{
var arr=[1,7,3,4,5];
var min=arr[0],max=arr[0];
for(var i=0;i<arr.length;i++)
{
	if(arr[i]>max)
  {
  max=arr[i];
  }
  if(arr[i]<min)
  {
  min=arr[i];
  }
  
  
}
console.log(min);
return max;
}
var q=print();
console.log(q);