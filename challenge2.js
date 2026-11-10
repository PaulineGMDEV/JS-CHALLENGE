const goal=5000;
let month=1;
let saving=100;
let total=0;

while (total < goal) {
    total += saving;

    let line= 'Month ${month}: saved KES ${saving},total KES &{total}';
    if (saving >= 500) {
    line += "Big month!";
}
console.log(line);
month++
}