var arr=[];
var num1=parseInt(prompt("Enter the first number"));
arr.push(num1);
var num2=parseInt(prompt("Enter the Second number"));
arr.push(num2);
var num3=parseInt(prompt("Enter the Third number"));
arr.push(num3);

if(arr[0]>arr[1])
{
  if(arr[1]>arr[3])
   alert(arr[0] +" Is big");
 }
else
  {
  if(arr[1]>arr[2])
  alert(arr[1] +" Is big");
  else
   alert(arr[2] +" Is big");
 }
