const now = new Date();
const day = now.toLocaleDateString(undefined, { weekday: 'long' });
console.log(day)