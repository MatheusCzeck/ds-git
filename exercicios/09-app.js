// map()
console.log("map()")
const numbers = [4,9,16,25]
const sqrtNumbers = numbers.map(Math.sqrt)
console.log(numbers)
console.log(sqrtNumbers)

// filter()
console.log("filter()")
const ages = [32,33,16,40]
const canDrink = ages.filter(age => age >= 18)
console.log(ages)
console.log(canDrink)

// reduce()
console.log("reduce()")
const aNumbers = [4,9,16,25]
const sum = aNumbers.reduce((acc, curr) => acc + curr, 0)
console.log(aNumbers)
console.log(sum)

// find()
console.log("find()")
const bNumbers = [4,9,16,25]
const firstEven = bNumbers.find(num => num % 2 === 0)
console.log(bNumbers)
console.log(firstEven)

// forEach()
console.log("forEach()")
const cNumbers = [4,9,16,25]
cNumbers.forEach(num => console.log(num))

// sort
console.log("sort()")
const dNumbers = [4,9,16,25]
dNumbers.sort((a,b) => a - b)

const nome = ["Sandra", "Ana", "Julia", "Maria"]
nome.sort()
console.log(nome)