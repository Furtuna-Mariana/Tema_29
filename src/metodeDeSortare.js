// Avem un arr cu stringuri 
const arr = ['Alex', 'Vasile', 'Boris', 'Constantin']

// Sortam aceasta lista, de la mic la mare, de la A la Z, 
// pt aceasta setam semnul mai mic/mare si trebuie sa intoarca fie -1 fie 1
console.log(arr.sort((a, b) => a < b ? -1 : 1 ))