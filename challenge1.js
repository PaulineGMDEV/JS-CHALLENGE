const limit=30
let both=0

for (let i=1; i<=limit;i++){
    if (i % 3 ===0 && i % 5 !==0){
        console.log("chai");
    }else if (i % 5 ===0 && i % 3!==0){
        console.log("Mandazi");
    }else if (i % 3===0 && i % 5===0) {
        console.log("Chai & Mandazi");
        both++;
    }else{
        console.log(i);
    }
}
    
console.log("Chai & Mandazi:"+ both);
