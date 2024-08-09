// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']

const buildWordChain = (words) => {
  //setting up function with words parameter
  const wordChain = []; //creating an empty array
  let word; //creating a variable to hold the word

  for (let i = 0; i < words.length; i++) {
    //looping over the words
    if (wordChain.length === 0) {
      //checking if the word chain is empty
      wordChain.push(words[i]); //adding the first word to the word chain
      word = words[i]; //setting the current word to the first word
      continue;
    }

    for (let j = 0; j < words.length; j++) {
      //looping over the words
      if (
        words[j].startsWith(word.slice(-1)) && //checking if the next word starts with the last letter of the current word
        !wordChain.includes(words[j]) //checking if the next word is already in the word chain
      ) {
        word = words[j]; //setting the current word to the next word
        wordChain.push(word); //adding the next word to the word chain
        break;
      }
    }

    if (wordChain.length === words.length) {
      //checking if the word chain is the same length as the words
      break;
    }
  }

  return wordChain;
};

export { buildWordChain };
