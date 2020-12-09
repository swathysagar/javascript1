var lower=10;
var upper=50;
var i;

console.log("prime numbers between 10 to 50 are;");
for(i=10;i<=50;i++){
    var flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(i);
    }
}