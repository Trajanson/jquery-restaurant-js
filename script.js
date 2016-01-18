var current_time = Date.now();

const TIME_TO_VIEW_PHOTO_IN_ISOLATION     = 1500;

const TIME_FOR_DESCRIPTION_TO_FADE_IN     = 3500;

const TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS    = TIME_TO_VIEW_PHOTO_IN_ISOLATION + TIME_FOR_DESCRIPTION_TO_FADE_IN;
  
const TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE  = 2000;
const TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE = 1500;
const TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE  = 1500;
const TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE = 1500;


const TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR = TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE + TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE + TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE + TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE;

const TIME_FOR_DESCRIPTION_TO_DISAPPEAR   = 2500;

const TIME_FROM_START_UNTIL_CONTENT_APPEARS = TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS + TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR + TIME_FOR_DESCRIPTION_TO_DISAPPEAR;







  // MODES  - display different screens
var current_mode = "home";













$(document).ready(function(){
  
  
  
  
  
  
  
/*  
  // Initial Message HTML
  //    "Delivering Wholesome Food to Your Final Frontier"
  //     - will flash various adjectives before disappearing to show the primary page content
  $("body").prepend('<div id="initial-message"><span class="missing">Delivering</span><br> <span id="adjectives">Wholesome</span><span class="missing">&nbsp;&nbsp;Food<br>to Your Final Frontier...</span></div>');
  
  
  
  
  
  
  
  
  // BEGIN INITIAL MESSAGING SEQUENCE
  
  // step 1) hide content (it will appear after the sequence)
  $('#content').hide();

  // step 2) show message
  $('#initial-message').delay(TIME_TO_VIEW_PHOTO_IN_ISOLATION).hide().fadeIn(TIME_FOR_DESCRIPTION_TO_FADE_IN);
  
  // step 3) remove non-adjectives
  $('.missing').delay(TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS).fadeOut(TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE);


  // step 4) flash adjectives
  $("#adjectives").delay(TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS + TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Nutritious").css({"color": "brown", "font-size": "1.1em"});
  }).delay(TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Delicious").css({"color": "rgb(95,219,90)", "font-size": "1.2em"});
  }).delay(TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
    $("#adjectives").text("Organic").css({"color": "red", "font-size": "1.3em"});
  }).delay(TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
    $('#initial-message').css({ "top": "17%" });
    $("#adjectives").text("Anywhere").css({"color": "rgb(219,90,95)", "font-size": "1.5em"});
  });
  
  // step 5) remove message
  $('#initial-message').delay(TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR).fadeOut(TIME_FOR_DESCRIPTION_TO_DISAPPEAR);
  
  // step 6) show content
  $('#content').delay(TIME_FROM_START_UNTIL_CONTENT_APPEARS).fadeIn(TIME_FOR_DESCRIPTION_TO_DISAPPEAR);

  // END INITIAL MESSAGING SEQUENCE

*/

  
})