for(let i=0;i<=10;i++){
    console.log(i);
}

//prime number
var num=7;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
      flag=1;
    }
}
if(flag==0){
    console.log(num+""+ "is a prime number");
}
else{
    console.log(num+""+ "is not a prime number");
}