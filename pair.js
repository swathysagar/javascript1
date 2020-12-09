var aarr=[1,2,3,4,6];
var element=7;
for(let item of aarr){
    for(let data of aarr){
        let sum=item+data;
        if(sum==element){
            console.log("pairs:(" +item+","+data+")");
        }
    }
}