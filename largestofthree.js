var num1=50;
var num2=60;
var num3=70;
var largest=0;
if(num1>num2 &num1>num3){
    largest=num1;
    console.log("largest:" +largest);
    if(num2>num3){
        console.log("second largest:" +num2);
    }
    else{
        console.log("second largest:" +num3);
    }

}
else if(num2>num3&num2>num1){
    largest=num2;
    console.log("largest:" +largest);
    if(num1>num3){
        console.log("second largest:" +num1);
    }
    else{
        console.log("second largest:" +num3);
    }

}

else if(num3>num1&num3>num2){
    console.log("largest:" +num3);
    if(num2>num1){
        console.log("second largest:" +num2);
    }
    else{
        console.log("second largest:" +num1);
    }
}


