let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// codecademy's solution to step 1
// let storyWords = story.split(' ');

// my solution to step 1 that I think is more accurate according to what was asked for.

let storyWords = [];
let currentWord = '';

for(i = 0; i < story.length; i++){
  if(story[i] != ',' && story[i] != '"' && story[i] != '\'' && story[i] != '!' && story[i] != '-' && story[i] != ' ' && story[i] != '.') {
    currentWord = currentWord + story[i];
  } else if (currentWord != ''){
    storyWords.push(currentWord);
    currentWord = '';
  }
}

// my test for step 1
console.log(storyWords);

// step 2
console.log(storyWords.length);

// step 3
let betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
})

// my test for step 3
console.log(betterWords.length);

// step 4
let totalAmountUsed = 0;
betterWords.forEach((word) => {
  if(overusedWords.includes(word)){
    totalAmountUsed++
  }
})
console.log('You used really, basically, and Very ' + totalAmountUsed + ' times');

// step 5 solution when you do step 1 the way codecademy does it.
// let senCounter = 0;
// betterWords.forEach((word) => {
//  if(word[word.length - 1] === '.' || word[word.length - 1] === '!') {
//    senCounter++;
//  }
//})
// console.log(senCounter);

// step 5 done if you do step 1 the way it is exactly worded.
let counter = 0;
for(i = 0; i < story.length; i++){
  if(story[i] === '.' || story[i] === '!'){
    counter++
  }
}
console.log('There are ' + counter + ' sentences in the story.');

// step 7
console.log(betterWords.join(' '));