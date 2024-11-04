// function longestWordIn(sentence) {
//   let splArray = sentence.split(" ");
//   let longestLen = 0;
//   let longestWord;

//   for (let i = 0; i < splArray.length; i++) {
//     if (splArray[i].length > longestLen) {
//       longestLen = splArray[i].length;
//       longestWord = splArray[i];
//     }
//   }

//   return longestWord;
// }

// function longestWordIn(sentence) {
//   let longestWord = sentence.split(" ").reduce(function (longest, current) {
//     console.log(longest);
//     console.log(current);
//     console.log("#")
//     return current.length > longest.length ? current : longest;
//   });

//   return longestWord;
// }

function longestWordIn(sentence) {
  let longestWord = sentence
    .split(" ")
    .reduce((l, c) => (c.length > l.length ? c : l));

  return longestWord;
}

console.log(
  longestWordIn("In Programming We Love Elzero Academy Tooooooooooo Much")
);
