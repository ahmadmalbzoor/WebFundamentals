function neg()
{
var arr=[-2,-3,4,-5,3];
for(var i=0;i<arr.length;i++)
{
	if(arr[i]<0)
  {
  arr[i]=0;
  }
}
console.log(arr);
}
neg();