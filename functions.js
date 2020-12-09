function add(num1,num2){
    var res=num1+num2;
    console.log(res);
}
add(10,30);

function sub(num1,num2){
    var res=num1-num2;
    console.log(res);
}
sub(10,30);

function mul(num1,num2){
    var res=num1*num2;
    console.log(res);
}
mul(10,30);

function fact(n){
    if(n==0|n==1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
let n=4;
var res=fact(n);
console.log(res);

//arrow functions
let add1=(num1,num2)=>num1+num2;
console.log(add1(50,50));

//arrow factorial
let factorial=(num)=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*1
    }
    console.log(fact);
}
let num=4;
factorial(num);


