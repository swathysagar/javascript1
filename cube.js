var num=236;
var result=0; // or we can use n2="";
while(num>0){
 var digit=num%10;
 result=result+digit*digit*digit; // or we can use n2=n2+String(digit)
 num=Math.floor(num/10);
}
console.log(result);