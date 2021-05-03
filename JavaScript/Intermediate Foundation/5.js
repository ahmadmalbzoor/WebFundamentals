function print(n)
{
    var arr=[5,3,2,4,5,6],x;
    if(arr.length<+2)
    {
        return null;
    }else
    {
    for(var i=0;i<=arr.length-1;i++)
    {
    x=arr[arr.length-n];
    }
    return x;
    }
}
console.log(print(3));