function print()
{
var arr=[1,2,3,4,5,6],x;
var x=arr[0];
arr[0]=arr[arr.length-1];
arr[arr.length-1]=x
return arr;
}
console.log(print())