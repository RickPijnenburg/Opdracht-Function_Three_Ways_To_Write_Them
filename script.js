function totalSquared1 (num1, num2){
    const square1 = num1 * num1;
    const square2 = num2 * num2;
    const total = square1 + square2;
    return (total * total);
};

const totalSquared2 = function(num1, num2){
    const square1 = num1 * num1;
    const square2 = num2 * num2;
    const total = square1 + square2;
    return (total * total);
};

const totalSquared3 = (num1, num2) => {
    const square1 = num1 * num1;
    const square2 = num2 * num2;
    const total = square1 + square2;
    return (total * total);
};

console.log(totalSquared1(2,2));
console.log(totalSquared2(3,3));
console.log(totalSquared3(4,4));
