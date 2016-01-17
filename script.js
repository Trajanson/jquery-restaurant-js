// .delay()

const DELAY_FOR_INITIAL_PHOTO_ISOLATION = 1500;

const DELAY_FOR_INITIAL_MESSAGE_LOAD = 5000;
  
const DELAY_FOR_FIRST_ADJECTIVE_CHANGE = 1000;

const DELAY_FOR_SECOND_ADJECTIVE_CHANGE = 1000;

const DELAY_FOR_THIRD_ADJECTIVE_CHANGE = 1000;

const DELAY_TIMER_VALUE = 20000; // 5000


$(document).ready(function(){
  
  $('#content').hide();

                             //////
  $('#initial-message').delay(DELAY_FOR_INITIAL_PHOTO_ISOLATION).hide().fadeIn(DELAY_FOR_INITIAL_MESSAGE_LOAD-DELAY_FOR_INITIAL_PHOTO_ISOLATION);
  
  
  $("#adjectives").delay(DELAY_FOR_INITIAL_MESSAGE_LOAD + DELAY_FOR_FIRST_ADJECTIVE_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Nutritious").css({"color": "brown", "font-size": "1.1em"});
  }).delay(DELAY_FOR_SECOND_ADJECTIVE_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Organic").css({"color": "red", "font-size": "1.2em" });
  }).delay(DELAY_FOR_THIRD_ADJECTIVE_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Delicious").css({"color": "brown", "font-size": "1.3em" });
  });
  
  
  
  //    $("#adjectives").text("Nutritious").css("color", "red");

  

//  $('#content').fadeOut(0).delay(DELAY_TIMER_VALUE).fadeIn(10000, function(){console.log("This was hit!");});


/*
  $('#initial-message').delay(DELAY_FOR_INITIAL_MESSAGE_LOAD).fadeIn(1000, function(){
    $('#adjectives').text("Nutritious").delay(3000).text("Organic").delay(3000).text("Delicious");
  });
  $('#initial-message').delay(DELAY_TIMER_VALUE).fadeOut(2000);





*/

  
}).delay();