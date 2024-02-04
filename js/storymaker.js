/*
Filename: storymaker.js
Programmer: Constantine Grigoriadis
Date: 1/30/2024
Description:
this script file contains all the logic for the story maker app

it usings several events to update a gui and play audio

Revision History:

Submitted 1/30/2024
*/
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const studentIdParagraph = document.querySelector("#studentId");
const noun1Button = document.querySelector("#noun1"); 

const verbButton = document.querySelector("#verb");

const adjectiveButton = document.querySelector("#adjective");

const noun2Button = document.querySelector("#noun2");

const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors

const noun1Output = document.querySelector("#choosenNoun1");

const currentVerbOutput = document.querySelector("#choosenVerb");

const currentAdjectiveOutput = document.querySelector("#choosenAdjective");

const currentNoun2Output = document.querySelector("#choosenNoun2");

const currentSettingOutput = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
 
const playbackButton = document.querySelector("#playback");

const randomStoryButton = document.querySelector("#random");

const resetButton = document.querySelector("#resetButton")

const storyParagraph = document.querySelector("#story");

//dictonarys for audio files

var noun1Dictionary;
var verbDictionary ;
var adjectiveDictionary ;
var noun2Dictionary;
var settingDictionary;

// Variables for pre-defined arrays

var noun1 = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];

var verb = ["sat on","ate","danced with","saw","doesn't like","kissed"];

var adjective = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

var noun2 = ["goat","monkey","fish","cow","frog","bug","worm"];

var setting = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"]

// Variables for count to grab array elements

var currentNoun1 = "";
var currentVerb = "";
var currentAdjective = "";
var currentNoun2 = "";
var currentSetting = "";

var noun1Count = 0;
var currentVerbCount = 0;
var currentAdjectiveCount = 0;
var currentNoun2Count = 0;
var currentSettingCount = 0;

/* Functions
-------------------------------------------------- */
/*
Function Name: checkStudentIdHeader
Function Description: 
This funcion renders the StudentId if its not
already rendered

It gets called by all the onClick functions
*/
function checkStudentIdHeader() {
    if(studentIdParagraph.textContent=="")
    {
        studentIdParagraph.textContent = "Created By: Constantine Grigoriadis - 1234197";
    }
}


async function loadJSONFromFile(filePath) {
    try {
      const response = await fetch(filePath);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading JSON:', error);
      return null;
    }
  }

function initApp()
{
    // Function to fetch and load JSON data from a file
  const jsonFilePath = './json/audio.json';
  loadJSONFromFile(jsonFilePath)
    .then(data => {
      if (data) {
        noun1Dictionary = data.noun1;
        verbDictionary = data.verb;
        adjectiveDictionary = data.adjective;
        noun2Dictionary = data.noun2;
        settingDictionary = data.setting; 
        // You can use these dictionaries as needed
        console.log(noun1Dictionary);
        console.log(verbDictionary);
        console.log(adjectiveDictionary);
        console.log(noun2Dictionary);
        console.log(settingDictionary);
      }
    });
}
/*
Function Name: noun1_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered
then sets the current noun
plays the audio for that noun
checks to see if it exceeds the range of values
and if it does resets the count
otherwise it increments the count
*/
function noun1_on_click() {
    checkStudentIdHeader();
    // variable to get array element and displaying it
    currentNoun1 = noun1[noun1Count];
    noun1Audio(noun1Count);
    // if-else to change count setting
    if (noun1Count>5)
    {
        noun1Count=0;
    }
    else
    {
        noun1Count++;
    }

    console.log(currentNoun1); 
    noun1Output.textContent = currentNoun1;   
}

function playAudio (partOfSentance,key)
{
    var audioLocation = "";
    if(partOfSentance =="noun1")
    {
        audioLocation = noun1Dictionary[key];
    }
    if(partOfSentance =="verb")
    {
        audioLocation = verbDictionary[key];
    }
    if(partOfSentance =="adjective")
    {
        audioLocation = adjectiveDictionary[key];
    }
    if(partOfSentance =="noun2")
    {
        audioLocation = verbDictionary[key];
    }
    if(partOfSentance =="setting")
    {
        audioLocation = settingDictionary[key];
    }
    var audio = new Audio(audioLocation);
    audio.play();
}

/*
Function Name: noun1Audio
Parameters:
currentCount - the current audio clip to play for the noun1
Function Description: 
var noun1 = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
from the above array at the respective index based on the parameter
it plays the audio for the value using a corresponding dictonary
*/
function noun1Audio(currentCount)
{
    playAudio("noun1",noun1[currentCount])
}
/*
Function Name: verb_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered
then sets the current verb
plays the audio for that verb
checks to see if it exceeds the range of values
and if it does resets the count
otherwise it increments the count
*/
function verb_on_click() {
    checkStudentIdHeader();
    currentVerb = verb[currentVerbCount];
    VerbAudio(currentVerbCount);
    // if-else to change count setting
    if (currentVerbCount>4)
    {
        currentVerbCount=0;
    }
    else
    {
        currentVerbCount++;
    }
    
    console.log(currentVerb);
    currentVerbOutput.textContent = currentVerb;
}
/*
Function Name: VerbAudio
Parameters:
currentCount - the current audio clip to play for the verb
Function Description: 

var verb = ["sat on","ate","danced with","saw","doesn't like","kissed"];


from the above array at the respective index based on the parameter
it plays the audio for the value using a dictonary
*/
function VerbAudio(currentCount)
{
  playAudio("verb",verb[currentCount])
}
/*
Function Name: adjective_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered
then sets the current adjective
plays the audio for that adjective
checks to see if it exceeds the range of values
and if it does resets the count
otherwise it increments the count
finally it renders its output
*/
function adjective_on_click() {
    checkStudentIdHeader();
    currentAdjective = adjective[currentAdjectiveCount];
    adjectiveAudio(currentAdjectiveCount);
    // if-else to change count setting
    if (currentAdjectiveCount>4)
    {
        currentAdjectiveCount=0;
    }
    else
    {
        currentAdjectiveCount++;
    }
    console.log(currentAdjective);
    currentAdjectiveOutput.textContent = currentAdjective;
}
/*
Function Name: adjectiveAudio
Parameters:
currentCount - the current audio clip to play for the adjective
Function Description: 

var adjective = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

from the above array at the respective index based on the parameter
it plays the audio for the value using a dictonary
*/
function adjectiveAudio(currentCount)
{
    playAudio("adjective",adjective[currentCount]);
}

/*
Function Name: noun2_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered
then sets the current noun2
plays the audio for that noun2
checks to see if it exceeds the range of values
and if it does resets the count
otherwise it increments the count
finally it renders its output
*/
function noun2_on_click() {
    checkStudentIdHeader();
    currentNoun2 = noun2[currentNoun2Count];
    noun2Audio(currentNoun2Count)
    // if-else to change count setting
    if (currentNoun2Count>5)
    {
        currentNoun2Count=0;
    }
    else
    {
        currentNoun2Count++;
    }
    console.log(currentNoun2); 
    currentNoun2Output.textContent=currentNoun2;
}

/*
Function Name: noun2Audio
Parameters:
currentCount - the current audio clip to play for noun2
Function Description: 

var noun2 = ["goat","monkey","fish","cow","frog","bug","worm"];

from the above array at the respective index based on the parameter
it plays the audio for the value using a switch case
*/
function noun2Audio(currentCount)
{
    playAudio("noun2",noun2[currentCount]);
}

/*
Function Name: setting_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered
then sets the current Setting
plays the audio for that Setting
checks to see if it exceeds the range of values
and if it does resets the count
otherwise it increments the count
finally it renders its output
*/
function setting_on_click() {
    checkStudentIdHeader();
    currentSetting = setting[currentSettingCount];
    settingAudio(currentSettingCount);
    // if-else to change count setting
    if (currentSettingCount>4)
    {
        currentSettingCount=0;
    }
    else
    {
        currentSettingCount++;
    }
    console.log(currentSetting); 
    currentSettingOutput.textContent = currentSetting;
}

/*
Function Name: settingAudio
Parameters:
currentCount - the current audio clip to play for setting
Function Description: 

var setting = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"]

from the above array at the respective index based on the parameter
it plays the audio for the value using a switch case
*/
function settingAudio(currentCount)
{
    playAudio("setting",setting[currentCount]);
}
/*
Function Name: playback_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered

first this function checks to see if each of the five values have been selected
if all five have been selected it concatinates the story
Then using the set timeout function it plays the audio for the story

If the values are not input it adds an alertbox
and plays audio telling the user to select the whole
story before pressing the button

*/
function playback_on_click() {
    checkStudentIdHeader();
    if( currentNoun1 != "" & currentVerb != "" & currentAdjective != "" & currentNoun2!="" & currentSetting !="")
    {
        storyParagraph.classList.remove("alert-danger");
        var story = currentNoun1 + " "+ currentVerb+ " " + currentAdjective+ " " + currentNoun2+ " " + currentSetting;    
        storyParagraph.textContent = story;
        setTimeout(function() {
            console.log(noun1Count);
            //your code to be executed after 1 second
            if(noun1Count == 0)
            {
                noun1Audio(6);
            }
            else
            {
                noun1Audio(noun1Count-1);
            }
          }, 0);
        
          setTimeout(function() {
            //your code to be executed after 1 second
            if(currentVerbCount == 0)
            {
                VerbAudio(5);
            }
            else
            {
                VerbAudio(currentVerbCount-1);
            }
            
          }, 1000);

          setTimeout(function() {
            //your code to be executed after 1 second
            if(currentAdjectiveCount ==0)
            {
                adjectiveAudio(5);
            }
            else
            {
                adjectiveAudio(currentAdjectiveCount-1);
            }
          }, 2000);

          setTimeout(function() {
            //your code to be executed after 1 second
            if(currentNoun2Count ==0)
            {
                noun2Audio(6);
            }
            else
            {
                noun2Audio(currentNoun2Count-1);
            }
          }, 3000);
        
          setTimeout(function() {
            //your code to be executed after 1 second
            if(currentSettingCount==0)
            {
                settingAudio(5);

            }
            else
            {
                settingAudio(currentSettingCount-1);
            }  
          }, 4000);
    }
    else
    {
        var errorOutput = "Please select all the values for the story silly";
        storyParagraph.textContent = errorOutput;
        var audio = new Audio('./audio/error.wav');
        audio.play();
        storyParagraph.classList.add("alert-danger");

    }

}

/*
Function Name: randomIntFromInterval
Function Description: 
This function takes in two values as parameters
min - the minimum value inclusive
max - the max value inclusive

it then provides a random number within the range specified
*/
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/*
Function Name: random_on_click
Function Description: 
this function is bound to an onclick at the end of the file

it checks if the student id needs to be rendered

it then gets random values for each of the 5 catagories
and concatinates a story

using the set timeout fuction

it plays each part of the audio for the story
with 1 second delay between each audio clip
*/
  function random_on_click() {
    checkStudentIdHeader();
   randomNoun1 =  randomIntFromInterval(0,6);
   randomVerb = randomIntFromInterval(0,5);
   randomAdjective = randomIntFromInterval(0,5);
   randomNoun2 = randomIntFromInterval(0,6);
   randomSetting = randomIntFromInterval(0,5);

   var story = noun1[randomNoun1] + " "+ verb[randomVerb]+ " " + adjective[randomAdjective]+ " " + noun2[randomNoun2]+ " " + setting[randomSetting];
   storyParagraph.classList.remove("alert-danger");
   storyParagraph.textContent = story;
   setTimeout(function() {
    noun1Audio(randomNoun1);
  }, 0);

  setTimeout(function() {
    //your code to be executed after 1 second
    VerbAudio(randomVerb);
    
  }, 1000);

  setTimeout(function() {
    //your code to be executed after 1 second
    adjectiveAudio(randomAdjective);
  }, 2000);

  setTimeout(function() {
    //your code to be executed after 1 second
    noun2Audio(randomNoun2);
  }, 3000);

  setTimeout(function() {
    //your code to be executed after 1 second
        settingAudio(randomSetting);
  }, 4000);

}

/*
Function Name: reset_on_click
Function Description: 
This funcion renders the StudentId
After that it resets 
all the variables
all the counts
all the outputs
and the story
*/
function reset_on_click()
{
    checkStudentIdHeader();
    currentNoun1 = "";
    currentVerb = "";
    currentAdjective = "";
    currentNoun2 = "";
    currentSetting = "";
    
    noun1Count = 0;
    currentVerbCount = 0;
    currentAdjectiveCount = 0;
    currentNoun2Count = 0;
    currentSettingCount = 0;

    noun1Output.textContent ="";
    currentVerbOutput.textContent = "";
    currentAdjectiveOutput.textContent = "";
    currentAdjectiveOutput.textContent = "";
    currentNoun2Output.textContent = "";
    currentSettingOutput.textContent = "";

    storyParagraph.textContent = "";
    

}

//Init function 
initApp();
/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click",noun1_on_click);
verbButton.addEventListener("click",verb_on_click );


adjectiveButton.addEventListener("click",adjective_on_click);
noun2Button.addEventListener("click",noun2_on_click);
settingButton.addEventListener("click",setting_on_click);

playbackButton.addEventListener("click",playback_on_click);
randomStoryButton.addEventListener("click",random_on_click);
resetButton.addEventListener("click", reset_on_click);