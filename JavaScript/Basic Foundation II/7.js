function add()
{
   var arr=[1,2,3,4,5,6,7];
   for(var i=0;i<arr.length;i++)
   {
   	if(arr[i]%2==1)
    {
    arr[i]+=1;
    }
   }
   return arr;
}
console.log(add());