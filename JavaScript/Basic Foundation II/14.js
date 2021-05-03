function print(arr=[],num)
{
for(var i=0;i<arr.length;i++)
{
	arr[i]*=num;
}
console.log(arr);
}
print([1,2,3],3)
