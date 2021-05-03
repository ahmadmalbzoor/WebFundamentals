function print(arr)
{
	var y=0;
  for(var i=0;i<=arr.length;i++)
  {
  if(arr[i]=="food")
  {
  y++;
  console.log("yummy")
  }
  if(y==0)
  {
  console.log("I'm hungry")
 	break;
  }
  }
  
}
print(["food","tea","coffe","millk","jkj"]);