var aarr=[1,2,3,4,6];
var element=3;
for(let i=0;i<=aarr.length;i++){
    for(let j=i+1;j<=aarr.length;j++){
        let sum=aarr[i]+aarr[j];
        if(sum==element){
            console.log("pairs:(" +aarr[i]+","+aarr[j]+")");
        }
    }
}