var arr=[10,20,30];
var element=10;
var flag=0;
for(let data of arr){
    if(data==element){
        flag=1;
        break;
    }
}

if(flag==1){
    console.log("present");
}
else{
    console.log("not present");
}
