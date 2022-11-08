
// "#1"
// function toNumberArray(stringarray){
//     return stringarray.map((e) => Number(e))
// }
// console.log(toNumberArray(["1", "2", "3"]))

"#2"

// function search(budget, prices) {
//     return prices.sort((a,b) => a - b).filter((v) => v <= budget).toString()
// }
// console.log(search(3, [1, 2, 3, 4, 5, 6]))

"#3"
// function isSortedAndHow(array) {
//     let ascending = array.sort((a, b) => a - b)
//     let descending = array.sort((a, b) => b - a)
    
//     // return array = descending ? "yes, descending" : array = ascending ? "yes, ascending" : "no"
//      if(array === descending){
//         return "yes, descending"
//     } else if(array === ascending){
//         return "yes, ascending"
//     } else {
//         return "no"
//     }
// }
// console.log(isSortedAndHow([1,2,3,4]))

"#4"

// Math.roundTo = function (number, precision) {
//     let multiple = Math.pow(10, precision);
//     var rounded = Math.round(number * multiple) / multiple;
//     return rounded;
//   }
//   console.log(Math.roundTo(3.1400539, 6))

"#5"

// function vowelOne(s){
//     let vowels = 0
//     const vowels1 = ['a', 'o', 'e', 'i', 'u']
//     for(let consonants of s) {
//         return vowels1.includes(consonants) ? vowels++ : vowels
//     }
//     return vowels
// }
// console.log(vowelOne('aevbeo'))