// Prompt the user for the number and length of the multiplication table
const number = parseInt(prompt("Enter the number for the multiplication table:"));
const length = parseInt(prompt("Enter the length of the multiplication table:"));

// Print the multiplication table
console.log(`Multiplication table for ${number} (up to ${length} multiples):`);
for (let i = 1; i <= length; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}
