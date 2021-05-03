function arr()
{
   var a=[1,2,1,2,1,2];
   var sum=0,avg;
   for(var i=0;i<a.length;i++)
   {
   		sum+=a[i];
   		
   }
   avg=sum/a.length;
   console.log(avg);
}
arr();

