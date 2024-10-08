// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];

const getNames = (people) => {
  //setting a function that takes in an array of people
  return people.map((person) => {
    //mapping over each person
    return `${person.firstName} ${person.lastName}`; //returning the full name
  });
};

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'

const getNameUsingDestructuring = ({ firstName, lastName }) => {
  //setting a function that takes in an object with first and last name
  return `${firstName} ${lastName}`; //returning the full name
};

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];

const getPeopleByLocation = (people, location) => {
  //setting a function that takes in an array of people and location
  return people.filter((person) => person.location === location); //returning the people in the given location
};

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

const translateToPirateTalk = (phrase) => {
  //setting a function that takes in a phrase
  return phrase
    .split(' ') //splitting the phrase into an array of words
    .map((word) => EN_PIRATE_LOOKUP[word] || word) //mapping over each word in the array
    .join(' '); //joining the words back into a phrase
};

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }

const wordCount = (str) => {
  //setting a function that takes in a string
  const words = str.split(' '); //splitting the string into an array of words
  return words.reduce((acc, word) => {
    //reducing the array into an object
    acc[word] = (acc[word] || 0) + 1; //if the word is in the object, increment the count, otherwise set the count to 1
    return acc; //returning the object
  }, {}); //setting the object which is currently an empty object
};

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true

const isBugAvailable = (bug, month) => {
  //setting a function that takes in an object representing a bug and a month
  return bug.availability.months.includes(month); //returning true if the bug is available in the given month, using dot notation to access nested objects
};

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

const buildBugHuntCalendar = (bugs) => {
  //setting a function that takes in an array of objects
  const calendar = {}; //setting an empty object that will be used to build the calendar
  for (let month = 0; month < 12; month++) {
    //looping over the months of the year
    calendar[month + 1] = []; //setting the value of each month to an empty array
  }

  bugs.forEach((bug) => {
    //looping over the array of bugs
    bug.availability.months.forEach((month) => {
      //looping over the months that the bug is available in
      if (!calendar[month].includes(bug.name)) {
        //if the bug is not already in the calendar for that month
        calendar[month].push(bug.name); //adding the bug to the calendar
      }
    });
  });

  return calendar;
};

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
