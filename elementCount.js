let input=prompt("enter input:").split(" ").join("");

console.log(input);
let alpha="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
for(i of alpha){
    let c=0;
    
    if(input.includes(i)){
        c=c+1
    }
    if(c>0){
        console.log(`${i}-${c}`);
    }
}