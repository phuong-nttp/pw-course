// function multiply(a, b) {
//     return a * b
// }
// console.log(multiply(10, 20))
// console.log(multiply(10, 30))
// console.log(multiply(10, 40))

// function findMin(a, b, c) {
//     if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(findMin(10, 20, 30))
// console.log(findMin(11, 21, 31))


// const students = [
//     { name: "An", score: 8.5 },
//     { name: "Bình", score: 7.2 },
//     { name: "Cường", score: 9.0 },
//     { name: "Dũng", score: 6.8 }
// ];

// function getTopStudents(students, threshold) {
//     results = []
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].score >= threshold) {
//             results.push(students[i].name)
//         }
//     }
//     return results
// }
// console.log(getTopStudents(students, 8))


function calculateInterest(principal, rate, years) {
    total = principal + principal * rate * years / 100
    return total
}
console.log(calculateInterest(1000, 5, 10))