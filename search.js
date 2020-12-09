var arr=[10,20,30];
var element=10;
var flag=1;
for(let item of arr){
    if(arr[item]==10){
        flag=0;
        break;
    }  
}

if(flag==0){
    console.log("present");
}
else if(flag==1){
    console.log("not present");
}

