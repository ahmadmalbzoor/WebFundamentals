function print()
{
	var arr=[2,2,2,2,1,1,1,1,2,3,3,3,3],x=0;
  for(var i=0;i<arr.length;i++)
  {
  	if(arr[i]%2==1&&arr[i+1]%2==1&&arr[i+2]%2==1)
    {
    console.log("odd")
    }
    
    	if(arr[i]%2==0&&arr[i+1]%2==0&&arr[i+2]%2==0)
    {
    console.log("even")
    }
    
  }
  	
}
console.log(print())