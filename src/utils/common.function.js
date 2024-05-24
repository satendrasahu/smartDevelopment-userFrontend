let counter = 0;
export function generateUniqueKey() {
    const datePart = Date.now().toString(36); // Base36 for compact representation
    const randomPart = Math.random().toString(36).substring(2, 8); // Random string
    const counterPart = (counter++).toString(36); // Incremental counter
    return `${datePart}-${randomPart}-${counterPart}`;
}

console.log(generateUniqueKey()); // e.g., 'l5z7r-5kb8c-0'
console.log(generateUniqueKey()); // e.g., 'l5z7r-6uivg-1'
