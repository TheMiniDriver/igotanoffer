


function isAnagramArray(string1, string2){
  // Guard checks and edge cases
  if (!string1 && !string2) return true;
  // One of the strings is null/empty, and the other isn't. 
  if (!string1 || !string2) return false;
  if (string1.length !== string2.length) return false;
  if (string1 === string2) return true; 

  let scoreboard = new Array(26).fill(0);

  const charOffset = 'a'.charCodeAt(0);
  for (let i=0; i < string1.length; i++){
    scoreboard[string1[i].toLowerCase().charCodeAt(0) - charOffset] ++; 
    scoreboard[string2[i].toLowerCase().charCodeAt(0) - charOffset] --;
  }

  for (let i=0; i < scoreboard.length; i++){
    if (scoreboard[i] !==0) return false; 
  }
  return true; 

}

let str ='bob';
str.toLowerCase()
function isAnagram(string1, string2){
  // Guard checks and edge cases
  if (!string1 && !string2) return true;
  // One of the strings is null/empty, and the other isn't. 
  if (!string1 || !string2) return false;
  if (string1.length !== string2.length) return false;
  if (string1 === string2) return true; 

  let scoreboard = {};

  for (let i=0; i < string1.length; i++){
    incValue(scoreboard, string1[i].toLowerCase(), 1);
    incValue(scoreboard, string2[i].toLowerCase(), -1);
  }

  for (let key in scoreboard){
    if (scoreboard.hasOwnProperty(key)){
      if (scoreboard[key] !== 0) return false;
    } 
  }
  return true; 
}

function incValue(map, key, value){
  if (map[key] === undefined){
    map[key] = 0;
  }
  map[key] += value;
}


console.log('True cases:')
console.log('-----------')
console.log(isAnagram('note','tone'));
console.log(isAnagram('races', 'cares'));
console.log(isAnagram('ales', 'sale'));
console.log(isAnagram(null,null));
console.log(isAnagram('',''));

console.log('');

console.log('False cases:');
console.log('-----------')
console.log(isAnagram('wrong', 'right'));
console.log(isAnagram('word', ''));
console.log(isAnagram('five', 'one'));
console.log(isAnagram('empty', null));
console.log(isAnagram('programming', 'code'))




