<!-- JAVASCRIPT  -->
 <!-- ========================================= -->
  var counter = 0;
  var number;
  var randNum;
  
  var numberOptions = [];
 
 // get a random number between 19 and 120 
var randomNumber = function()
 {
    return Math.floor(Math.random() * (121 - 19)) + 19;
 }
 randNum = randomNumber();

$("#number-to-guess").text(randNum);

// get a random number between 1 and 12 for the crystals
var randomCrystalNumber = function()
{
    return Math.floor(Math.random() * (13 - 1)) + 1;
 }




  
  

 for (var i=0; i < 4; i++){
  console.log(i);
  number = randomCrystalNumber();
  //randomCrystalNumber();
  numberOptions.push(number);
  //guessedLetters.push(userInput);
  //numberOptions[i] = randomCrystalNumber;
  console.log("The numbers chosen are: " + numberOptions[i]);
 }
 // Now for the hard part. Creating multiple crystals each with their own unique number value.

 // We begin by expanding our array to include four options.
 

 console.log(numberOptions[0]);
 console.log(numberOptions[1]);
 console.log(numberOptions[2]);
 console.log(numberOptions[3]);
 console.log(numberOptions.length);

 // Next we create a for loop to create crystals for every numberOption.
 for (var i = 0; i < numberOptions.length; i++) {

   // For each iteration, we will create an imageCrystal
   var imageCrystal = $("<img>");

   // First each crystal will be given the class ".crystal-image".
   // This will allow the CSS to take effect.
   imageCrystal.addClass("crystal-image");
        if(i === 0)
          {
            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/crystal1.jpg");
          }
        else if(i === 1)
          {
            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/crystal2.jpg");
          }
        else if(i === 2)
          {
          // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/crystal3.jpg");
          }
        else if(i === 3)
          {
          // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/crystal4.jpg");
          }

   // Each imageCrystal will be given a data attribute called data-crystalValue.
   // This data attribute will be set equal to the array value.
   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
   $("#crystals").append(imageCrystal);
 }

 // This time, our click event applies to every single crystal on the page. Not just one.
 $(".crystal-image").on("click", function() {

   // Determining the crystal's value requires us to extract the value from the data attribute.
   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
   
   var crystalValue = ($(this).attr("data-crystalvalue"));

   crystalValue = parseInt(crystalValue);
   //console.log(typeof crystalValue);
   // We then add the crystalValue to the user's "counter" which is a global variable.
   // Every click, from every crystal adds to the global counter.
   counter += crystalValue;
   console.log(counter + ", " + typeof counter);
   $("#score").html("<h2>" + counter + "</h2>");


   // All of the same game win-lose logic applies. So the rest remains unchanged.
   alert("New score: " + counter);
   console.log("Random Number = " + randNum);
   console.log("Score so far = " + counter);

   if (counter === randNum) {
    // alert("You win!");
     $("#Message").html("You Win!");
   }

   else if (counter >= randNum) {
     //alert("You lose!!");
     $("#Message").html("You Lose!");
   }

 });