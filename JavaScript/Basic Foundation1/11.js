function sum()
{
 var arr=[4,7,3];
 var max=arr[0];
 var min=arr[0],sum=0, avg;
for(var i=0;i<=arr.length-1;i++)
{
sum+=arr[i];

if(arr[i]>max)
{
max=arr[i];
}
if(arr[i]<min)
{
min=arr[i];
}
}
avg=sum/arr.length;
arr=[max,min,avg];
console.log(arr);
}
sum();