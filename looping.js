 var i=0;
 while(i<3){
     console.log("hello");
     i++;
 }
 //prgm to print one to ten 
 var j=1;
 while(j<=10){
     console.log(j);
     j++;
 }
 //prgm to print 10 to 1
 var g=10;
 while(g>=1){
     console.log(g);
     g--;
 }

 //next prgm
 var limt=50;
 var i1=1;
 var sum=0;
 while(i1<=50){
     if(i1%2!=0){
        sum=sum+i1
     }
     i1++;
 }
 console.log(sum);
//reverse
 var num=123;
var n2=0;
while(num!=0){
 var digit=num%10;
 n2=n2*10+digit;
 num=Math.floor(num/10);
}
console.log(n2);