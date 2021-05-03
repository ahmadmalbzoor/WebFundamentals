function greater(y)
{
 var arr=[1,3,2,5,3];
  ;
     var max=[];
 for(var i=0; i<arr.length;i++)
 {
  if(arr[i]>y)
  {
    max.push(arr[i]);

  }
 }
 console.log(max)
}
greater(4);