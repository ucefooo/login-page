function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return totalSum - actualSum;
}

const numbers = [];
for (let i = 1; i <= 45; i++)
    numbers.push(i);
numbers.splice(12, 1); // Remove the 11th number
console.log("Missing number:", findMissingNumber(numbers));

