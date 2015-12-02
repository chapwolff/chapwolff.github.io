////////////////////////////////Step 1 -Set up the game

//Create Variable to hold the object array, the current
//object number and the current score
var objs = [];
var currentObjectID = 0;
var currentScore = 0;

//Set up the document.ready by calling the 
//method that begins the game - beginGame()
$(document).ready(function(){
    beginGame();
});

//create a function that builds an object array 
//that contains all of the locations,
//then call a function that sets up the page for
//the first time i.e. populating the first image,
//question buttons, current score etc.

function beginGame(){
    objs = BuildObjectArray();
    populatePageContent(0);
}

//Create a function called populatePageContent
//that populates the image, answer buttons and score
//for the current question. This should take and argument
//of the current question number minus 1 (since the questions
// #1 is array element 0.)

function populatePageContent(objId){
    $('#answer1').attr('data-correct', 'false');
    $('#answer2').attr('data-correct', 'false');
    $('#answer3').attr('data-correct', 'false');
	
    var answerNumber = getRandomArbitrary(1,3);
    $('#bowImage').attr('src', objs[objId].bowImage);
    $('#value' + answerNumber).text(objs[objId].bowDescription);
    $('#answer' + answerNumber).attr('data-correct', 'true');
	
    if (answerNumber == 1){
        $('#value'+ 2).text(objs[objId].wrongAnswer1);
        $('#value'+ 3).text(objs[objId].wrongAnswer2);
    }
    if (answerNumber == 2){
        $('#value'+ 1).text(objs[objId].wrongAnswer1);
        $('#value'+ 3).text(objs[objId].wrongAnswer2);
    }
    if (answerNumber == 3){
        $('#value'+ 1).text(objs[objId].wrongAnswer1);
        $('#value'+ 2).text(objs[objId].wrongAnswer2);
    }
}

//create a function that creates (5) or mor Javascript objects.
//Each object should have properties that contain data used
//by the game for each question. TEach object should be assigned to
//a new variable
//Once the objects have been created and the variable assigned 
//the vaiables should be loaded into the object array variable 
//created in step 1.

function BuildObjectArray(){
    var bow1 = {
        bowName: "Training",
        bowDescription: "Training Bow",
        bowImage: "image/trainer.jpg",
        wrongAnswer1: "Long Bow",
        wrongAnswer2: "Cross Bow"
    };
    var bow2 = {
        bowName: "Recurve",
        bowDescription: "Recurve Bow",
        bowImage: "image/recurve.jpg",
        wrongAnswer1: "Double Curve Bow",
        wrongAnswer2: "Zelda Bow"
    };
    var bow3 = {
        bowName: "Long",
        bowDescription: "Long Bow",
        bowImage: "image/long.jpg",
        wrongAnswer1: "Yumi Bow",
        wrongAnswer2: "Composite Bow"
    };
    var bow4 = {
        bowName: "Compound",
        bowDescription: "Compound Bow",
        bowImage: "image/compound.jpg",
        wrongAnswer1: "Mechanical Bow",
        wrongAnswer2: "Hunting Bow"
    };var bow5 = {
        bowName: "Mongolian",
        bowDescription: "Mongolian Bow",
        bowImage: "image/mongolian.jpg",
        wrongAnswer1: "Recurve Bow",
        wrongAnswer2: "Saracen Bow"
    };
    objs =[bow1, bow2, bow3, bow4, bow5];
    return objs;
}
//////////////////////////Step 2 - Play the game
//Create a function that calls methods to present
//a populated modal dialog showing the results
//to the user, and processing the state of the page
//This method is called by the onclick of a listitem in
//the HTML page, and so it shouldn't contain any logic
//It should just call other methods that do the actual work

function checkAnswer(e) {
    processModal(e);
    setGameState();
}
//Create a function that processes the Modal Dialog that tells
//the user whether they selected the right answer, and what
//the points awarded are.
function processModal(e){
    if($('#'+ e.id).attr('data-correct') === 'true'){
        currentScore = currentScore + 5;
        $('#modalTitle').html('Correct');
        $('#modalMessage').html('The correct answer is ' +
            objs[currentObjectID].bowDescription);
        $('#modalScore').html('Score: 5 points');
        $('#result').html('Your Score is: ' + currentScore);
    }
    else{
        $('#modalTitle').html('Incorrect');
        $('#modalMessage').html('The correct answer is ' + 
            objs[currentObjectID].bowDescription);
        $('#modalScore').html('Score: 0 points');
        $('#result').html('Your score is: ' + currentScore);
    }
}

//Detetermin what array element is the currentObjectID
//and, depending on whether we are at the last element
//or not, move to the next element or set up the page
//to finish the game
function setGameState(){
    if (currentObjectID === objs.length - 1) {
        finishGame();
    }
    else {
        setCurrentObjectID(currentObjectID + 1);
    }
    populatePageContent(currentObjectID);
}

//////////////////////Step 3 - Finish the game

//Set up the UI for finishing the game
//by hiding answer buttons and showing
//play again button
function finishGame(){
    $('#answers').addClass('hidden');
    $('#playButton').removeClass('hidden');
}

///////////////////////Helper methods

//This method provides a single place
//to change the currentObjectID variable
function setCurrentObjectID(val){
    currentObjectID = val;
}

//This method returns an integer between 1 and 3
//That's all it does, but it's used by another process
function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}













