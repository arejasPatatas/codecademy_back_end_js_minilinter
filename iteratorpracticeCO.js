let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//1
const storyWords = story.split(" ");

//2
console.log(storyWords.length);

//3
const betterWords = storyWords.filter(sword => {
   return !unnecessaryWords.includes(sword);  
});

console.log(betterWords.length);

//4 reduce function
const overusedWordsFunction = textArray => {
  let uword0 = 0;
let uword1 = 0;
let uword2 = 0;
  for (word of textArray) {
    if (word === overusedWords[0]) {
      uword0 += 1;
    } else if (word === overusedWords[1]) {
               uword1 += 1;
               } else if 
                 (word === overusedWords[2]) {
                  uword2 += 1;
                  }
               
  }
  console.log(overusedWords[0]+': '+uword0);
  console.log(overusedWords[1]+': '+uword1);
  console.log(overusedWords[2]+': '+uword2);
}

overusedWordsFunction(betterWords);

//5 count sentences
let sentenceCount = 0;
const sentenceCounter = paragraph => {
  
  for (word of paragraph) {
    if (word.includes(".") | word.includes("!")) {
      sentenceCount += 1;
    }
  }
}
sentenceCounter(betterWords);
console.log('Number of sentences: '+sentenceCount);

console.log('\n\n');

//6 as function
const DisplayPrettyResults = () => { 
wordCount = betterWords.length;

console.log('The improved text contains '+wordCount+' words.');

console.log(sentenceCount+' sentences.');
console.log('You have overused these words: ');
overusedWordsFunction(betterWords);
}

DisplayPrettyResults();

//7
let reallyIndex = [];
let veryIndex = [];
let basicallyIndex = [];

betterWords.forEach(function(item,index,array) {
  if (item === 'really') {
    return reallyIndex.push(index);
  } else if (item === 'very') {
    return veryIndex.push(index);
  } else if (item === 'basically') {
    return basicallyIndex.push(index);
  }
})

console.log('really: ', reallyIndex);
console.log('very: ', veryIndex);
console.log('basically: ', basicallyIndex);

//c. to remove it, determinee if the index is uneven

const isEven = i => {
  return i % 2 === 0;
}

const arrayOfIndexes = [reallyIndex,veryIndex,basicallyIndex];
//d. replace the words from the uneven indexes

for (array of arrayOfIndexes) {

array.forEach(function(item,index,array) {
  if (!isEven(index)) {
    betterWords[item] = "REMOVED";
  }
}); 
};

console.log("Removal of uneven 'Really's: ");
console.log(betterWords[37], betterWords[79]);

console.log("Removal of uneven 'Very's: ");
console.log(betterWords[92], betterWords[112]
                                      , betterWords[120],betterWords[151],betterWords[174]);

console.log("Removal of uneven 'Basically's: ");
console.log(betterWords[52]);

//e. to remove double spaces, remove the replaced words

betterWords.forEach(function(item,index,array) {
  if (item === "REMOVED") {
    betterWords.splice(index,1);
  } 
})
console.log(betterWords.join(' '));

//8. BONUS - 2
let betterWordsSmall = betterWords.map(word => {
  return word.toLowerCase();
})

console.log(betterWordsSmall);

betterWordsCopy = betterWordsSmall.slice(0);
//console.log('Copy: ', betterWordsCopy);

let betterWordsCounter = [];
for (word of betterWordsSmall) {
  let wordCountTemp = 0
  for (word2 of betterWordsCopy) {
    if (word === word2) {
      //console.log('yeew!');
      wordCountTemp += 1;
    }
  } betterWordsCounter.push(wordCountTemp);
}

//console.log(betterWordsCounter);

betterWordsCounterCopy = betterWordsCounter.slice(0)

betterWordsCounterCopy.sort(compareNumbers);
console.log(betterWordsCounterCopy);

bwcc = betterWordsCounterCopy
mostUsedWordAmmount = bwcc[bwcc.length-1];
console.log(mostUsedWordAmmount);

//extra function for correct sorting
function compareNumbers(a, b) {
  return a - b;
}

let muwI = betterWordsCounter.indexOf(mostUsedWordAmmount);
console.log(muwI);

let mostUsedWord = betterWords[muwI];
console.log("The most used word is: '", mostUsedWord, "' used ",betterWordsCounter[muwI], 'times');