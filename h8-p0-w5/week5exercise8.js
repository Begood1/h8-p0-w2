//Given a search function The agent (sentence) that accepts a string parameter. Function will return the number of times found the word "abc" in a row in the sentence. Use regex to practice regex skills.


function cariPelaku(str) {
  // you can only write your code here!
  return str.match(/abc/g).length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
