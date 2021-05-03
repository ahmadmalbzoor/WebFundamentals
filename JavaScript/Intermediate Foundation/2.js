function print(n)
{
    var x=1;
    for(var i=n;i>0;i--)
    {
        x*=i;
    }
    return x;
}
console.log(print(5));