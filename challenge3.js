{let marks =[78,45,-5,92,60,101,55,38];
let valid=0;
let passed=0;
let failed=0;
let total=0;
let highest=-1;
let higheststudent=0;


for(let i=0;i<marks.length;i++) {
    const mark=marks[i];

    if (mark <0 || mark >100){
        console.log('Student ${i+1}:invalid mark,skipped');
}

let grade;
if (mark >=80){
    grade="A"
}else if (mark>=70){
    grade="B"
}else if(mark>=60){
    grade="C"
}else if (mark>=50){
    grade="D"
}else{
    grade="E"
}


let result;
if (mark>=50) {
    result="Pass"
    passed++;
}else {
    result="Fail"
    failed++;
}

console.log('Student ${i+1}:${mark}-Grade${grade}(${result}');

valid++;
total+=mark;

if(mark>highest){
    highest=mark;
    highestStudent=i+1;
  }
}

console.log(".....................")
console.log('Valid marks:${valid}');
console.log('Passed:${passed}');
console.log('Failed):${failed}');
console.log('Average:${(total/valid).toFixed(1)}');
console.log('Highest:${highest} (Student${highestStudent})');
}