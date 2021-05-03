function print(n)
{
    var x=0;
    for(var i=n;i>0;i--)
    {
        x+=i;
    }
    return x;
}
console.log(print(5));