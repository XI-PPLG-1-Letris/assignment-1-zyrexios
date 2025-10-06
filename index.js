let a = 10
let b = 20

console.log("a =", a)
console.log("b =", b)

const pertambahan = (a,b) => {
    return a + b;
}
    console.log("penjumlahan", pertambahan(a,b))

const pengurangan = (a,b) => {
    return a - b;
}
console.log("pengurangan", pengurangan(a,b))

const pembagian = (a,b) => {
    return a / b;
}
    console.log("pembagian", pembagian(a,b))

const perkalian = (a,b) => {
    return a * b;
}
console.log("perkalian", perkalian(a,b))

const persen = (a,b) => {
    return a % b;
}
console.log("modulus", persen(a,b))