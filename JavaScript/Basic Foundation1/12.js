function swap()
{
var arr=[1,5,10,-2],x,y;
x=arr[0];
y=arr[arr.length-1]
for(var i=0;i<arr.length;i++)
{
arr[0]=y;
arr[arr.length-1]=x;
}

console.log(arr);
}
swap();