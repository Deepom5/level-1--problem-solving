function nChai(n, k, g, b) {

let result = [], arr = []

for (let i = 0; i < g; i++)
arr.push("Green")

for (let i = 0; i < b; i++)
arr.push("Black")

const permute = (arr, m = []) => {
if (arr.length === 0) {

let count = 1

for (let i = 0; i < m.length; i++) {
if (i > 0 && m[i] === m[i - 1])
count++
else
count = 1

if (count > k) 
return
}

result.push(m)

} else {
for (let i = 0; i < arr.length; i++) {
let curr = arr.slice()
let next = curr.splice(i, 1)

permute(curr.slice(), m.concat(next))
}
}
}

permute(arr)
return result.length > 0 ? result[0] : [] 
}
console.log(nChai(5,1,3,2));