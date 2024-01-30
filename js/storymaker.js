// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
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
function noun1_on_click() {
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

function noun1Audio(currentCount)
{
    /*
    var noun1 = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];

    */
    switch(currentCount)
    {
        case 0:
            var audio = new Audio('./audio/noun1/theTurkey.wav');
            audio.play();
        break;
        case 1:
            var audio = new Audio('./audio/noun1/mom.wav');
            audio.play();
        break;
        case 2:
            var audio = new Audio('./audio/noun1/dad.wav');
            audio.play();
        break;
        case 3:
            var audio = new Audio('./audio/noun1/theDog.wav');
            audio.play();
        break;
        case 4:
            var audio = new Audio('./audio/noun1/MyTeacher.wav');
            audio.play();
        break;
        case 5:
            var audio = new Audio('./audio/noun1/theElephant.wav');
            audio.play();
        break;
        case 6:
            var audio = new Audio('./audio/noun1/theCat.wav');
            audio.play();
        break;
    }
}

function verb_on_click() {
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

function VerbAudio(currentCount)
{
    /*
var verb = ["sat on","ate","danced with","saw","doesn't like","kissed"];

    */
    switch(currentCount)
    {
        case 0:
            var audio = new Audio('./audio/verb/saton.wav');
            audio.play();
        break;
        case 1:
            var audio = new Audio('./audio/verb/ate.wav');
            audio.play();
        break;
        case 2:
            var audio = new Audio('./audio/verb/dancedWith.wav');
            audio.play();
        break;
        case 3:
            var audio = new Audio('./audio/verb/saw.wav');
            audio.play();
        break;
        case 4:
            var audio = new Audio('./audio/verb/doesntLike.wav');
            audio.play();
        break;
        case 5:
            var audio = new Audio('./audio/verb/kissed.wav');
            audio.play();
        break;
    }
}
function adjective_on_click() {
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

function adjectiveAudio(currentCount)
{
    /*
var adjective = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];

    */
    switch(currentCount)
    {
        case 0:
            var audio = new Audio('./audio/adjective/aFunny.wav');
            audio.play();
        break;
        case 1:
            var audio = new Audio('./audio/adjective/aScary.wav');
            audio.play();
        break;
        case 2:
            var audio = new Audio('./audio/adjective/aGoofy.wav');
            audio.play();
        break;
        case 3:
            var audio = new Audio('./audio/adjective/aSlimy.wav');
            audio.play();
        break;
        case 4:
            var audio = new Audio('./audio/adjective/aBarking.wav');
            audio.play();
        break;
        case 5:
            var audio = new Audio('./audio/adjective/aFat.wav');
            audio.play();
        break;
    }
}
function noun2_on_click() {
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


function noun2Audio(currentCount)
{
    /*
var noun2 = ["goat","monkey","fish","cow","frog","bug","worm"];


    */
    switch(currentCount)
    {
        case 0:
            var audio = new Audio('./audio/noun2/goat.wav');
            audio.play();
        break;
        case 1:
            var audio = new Audio('./audio/noun2/monkey.wav');
            audio.play();
        break;
        case 2:
            var audio = new Audio('./audio/noun2/fish.wav');
            audio.play();
        break;
        case 3:
            var audio = new Audio('./audio/noun2/cow.wav');
            audio.play();
        break;
        case 4:
            var audio = new Audio('./audio/noun2/frog.wav');
            audio.play();
        break;
        case 5:
            var audio = new Audio('./audio/noun2/bug.wav');
            audio.play();
        break;
        case 6:
            var audio = new Audio('./audio/noun2/worm.wav');
            audio.play();
        break;
    }
}
function setting_on_click() {
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


function settingAudio(currentCount)
{
    /*
var setting = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"]

    */
    switch(currentCount)
    {
        case 0:
            var audio = new Audio('./audio/setting/onTheMoon.wav');
            audio.play();
        break;
        case 1:
            var audio = new Audio('./audio/setting/onTheChair.wav');
            audio.play();
        break;
        case 2:
            var audio = new Audio('./audio/setting/inMySpagetti.wav');
            audio.play();
        break;
        case 3:
            var audio = new Audio('./audio/setting/inMySoup.wav');
            audio.play();
        break;
        case 4:
            var audio = new Audio('./audio/setting/onTheGrass.wav');
            audio.play();
        break;
        case 5:
            var audio = new Audio('./audio/setting/inMyShoes.wav');
            audio.play();
        break;
    }
}
// concatenate the user story and display
function playback_on_click() {
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

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// grabbing random element from arrays, concatenate and display
function random_on_click() {
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


function reset_on_click()
{
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