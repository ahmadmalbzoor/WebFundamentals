function arymax()
{
    var arr=[1,8,2,10,3];
      var max=arr[0];
      for(var i=0;i<=arr.length;i++)
      {
      if(arr[i]>max)
      {
      max=arr[i];
      }
      }
    console.log(max);
}
arymax();