let arr=[1,2,3,4,5,0];
let wholearr=[];
let final=[]
for(i=0;i<arr.length;i++){
    subarr1=[];
    mainres="";
    let y;
    for(j=i+1;j<=arr.length;j++){
        if(arr[i]!=0 && arr[j]!=0)
        subarr1.push(arr.slice(i,j));
    }
    wholearr.push(subarr1);
    // y=mainres.split(" ");
}
let x=wholearr.flat();
for(i of x){
    for(j=0;j<i.length;j++){
        if(i.includes(j)){
              final.push(i);
        }
    }
}
console.log(final);
