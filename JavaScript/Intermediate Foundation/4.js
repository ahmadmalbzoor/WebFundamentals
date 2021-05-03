function print()
{
    var arr=["coding",1,"dojo",2],x;
    if(arr.length<=2)
    {
        return null;
    }else
    {
        for(var i=0;i<arr.length;i++)
        {
            x=arr[arr.length-2];
        }
        return x;
    }
}
console.log(print());