var startingHTML1 = `
      <div id="screen-warning">
        Please view this content in landscape mode.
      </div>
`;

var startingHTML2 = `
        <div id="cart-display" class="clickable">
            <span id="cart-tracker">No Items</span> in Cart
        </div>
`;

var startingHTML3 = `
        <div id="display-content">
          <div class='content-title'><p>Artisanal,<br>Handcrafted <b>Salmon Jerky</b></p></div>

          <div class = 'content-text'>
              <div id='jerky-image-container' class="product-image-container clickable">
                  <img id='jerky-image' class='product-picture' src='Smoked_Salmon.jpg'/>
                  <br>&nbsp;&nbsp;<b><span id='buy-jerky' class='Add-To-Cart-Below-Image clickable'>Add to Cart</span></b>
              </div>
              <div class='product-description' id="jerky-product-description">
                  Paleo Trek's Salmon are wild caught by native Kanak fishermen off the coast of New Caledonia. These pristine waters of the South Pacific ensure a mouth-watering quality of freshness unmatched in dried seafood culinary artistry. High in Protein. Low in Fat.
              </div>
            <div id="flat-rate-declaration-box"><span id="flat-rate-declaration">
                <h3>Flat Rate Shipping</h3>
                <p>Paleo Trek will ship for <b>one</b> price to <u>anywhere</u> in the world!</p>
            </span></div>
          </div>
        </div>

`;

var startingHTML4 = `
        <div id="menu-title" class="menu">
            <div id="logo-pic-div"><img id="logo-pic" src="Logo.png"/></div>
            <!--<span id="menu-title-text-whole"><span id="first-menu-title-inner-span">Paleo</span><span id="second-menu-title-inner-span">Trek</span></span> -->
        </div>

        <div id="menu-black-box-1" class="menu"></div>

        <div id="menu-option-1" class="menu clickable">
            <h4>Artisanal<br>Salmon Jerky</h4>
        </div>

        <div id="menu-black-box-2" class="menu"></div>

        <div id="menu-option-2" class="menu clickable">
            <h4>Imaginative<br>Trail Mix</h4>
        </div>

        <div id="menu-black-box-3" class="menu"></div>

        <div id="menu-option-3" class="menu clickable">
            <h4>About</h4>
        </div>

        <div id="menu-black-box-4" class="menu"></div>

        <div id="menu-option-4" class="menu clickable">
            <span id="checkout_menu_text"><h4>Checkout</h4></span>
        </div>

        <div id="menu-black-box-5" class="menu"></div>
`;

$.holdReady( true );
  $("body").append(startingHTML1);
  $("#content").append(startingHTML2);
  $("#content").append(startingHTML3);
  $("#content").append(startingHTML4);
  $("body").hide();
setTimeout(function(){
  $("body").show();
  $.holdReady( false );
}, 2000);  

















var current_mode = "home";



// MENU COLORS
const SALMON_JERKY_MENU_BACKGROUND_COLOR_ON_HOVER = "rgb(147, 94, 60)";
const TRAIL_MIX_MENU_BACKGROUND_COLOR_ON_HOVER = "rgb(105, 110, 52)";
const ABOUT_MENU_BACKGROUND_COLOR_ON_HOVER = "rgb(67, 69, 64)";
const CHECKOUT_MENU_BACKGROUND_COLOR_ON_HOVER = "rgb(187, 126, 37)";

const STANDARD_MENU_BACKGROUND = "rgba(255,255,255,.65)";



// CART & SHOPPING
const PRICE_OF_SALMON = 19.95;
const PRICE_OF_TRAIL_MIX = 9.95;
const PRICE_OF_SHIPPING = 4.95;

var cart = {jerkyInCart: 0, trailMixInCart: 0};


var setProductPurchaseButton = function(){
  $(".product-image-container").mouseenter(function(){
    $(".Add-To-Cart-Below-Image").css({"color": "white"});
  });
  $(".product-image-container").mouseleave(function(){
    $(".Add-To-Cart-Below-Image").css({"color": "black"});
  });
  $(".product-image-container").click(function(){
    if( $(this).attr('id') == "jerky-image-container" ){
      cart["jerkyInCart"]++;
      updateCartDisplay();
    } else if ( $(this).attr('id') == "nuts-image-container" ) {
      cart["trailMixInCart"]++;
      updateCartDisplay();
    }
  });
};


var updateCartDisplay = function(){
  var numberInCart;
  var updatedCartDisplay;

  numberInCart = Number(cart["jerkyInCart"]) + Number(cart["trailMixInCart"]);
  if(numberInCart === 0) {
    updatedCartDisplay = "No Items";
  } else if (numberInCart === 1) {
    updatedCartDisplay = "1 Item";
  } else if (numberInCart > 1) {
    updatedCartDisplay = numberInCart + " Items";
  } else {
    console.log("ERROR IN CART DISPLAY");
  }
  $("#cart-tracker").text(updatedCartDisplay);
};






































// Render Cart Page
var renderCart = function(){
  var numberOfJerkyInCart = cart["jerkyInCart"],
      numberOfNutsInCart  = cart["trailMixInCart"],
      numberOfItemsInCart = numberOfJerkyInCart + numberOfNutsInCart;

  if (numberOfItemsInCart === 0){
    $('#display-content').html(EMPTY_CART_HTML);
  } else {
    // remove product row if product is not in cart
    if(numberOfJerkyInCart === 0){
      $("#jerky-checkout-row").hide();
    }
    if(numberOfNutsInCart === 0){
      $("#nuts-checkout-row").hide();
    }
    // set the amount shown in the cart to the amount actually in the cart
    $("#jerky-quantity-shown-in-cart").attr("value", numberOfJerkyInCart);
    $("#nuts-quantity-shown-in-cart").attr("value", numberOfNutsInCart);

    // set the product subtotals equal to the price * quantity
    var jerkySubtotal = PRICE_OF_SALMON * numberOfJerkyInCart;
    var nutsSubtotal = PRICE_OF_TRAIL_MIX * numberOfNutsInCart;
    $("#jerky-subtotal").text( (jerkySubtotal).toFixed(2).toString() );
    $("#nuts-subtotal").text( (nutsSubtotal).toFixed(2).toString() );

    // set the total subtotal as the sum of subtotals
    var totalSubtotal = jerkySubtotal + nutsSubtotal;
    $("#total-subtotal").text( (totalSubtotal).toFixed(2).toString() );

    // set the total as the sum of the subtotal and shipping
    var finalTotal = totalSubtotal + PRICE_OF_SHIPPING;
    $("#total-total").text( (finalTotal).toFixed(2).toString() );

  }
  updateCartDisplay();

};


var bindEventsToCartPage = function(){
  updateJerkyValueInCartView();
  updateTrailMixValueInCartView();
  $("#flat-rate-declaration-box").hide(); // to appear later
  createFlatRateShippingPopup();
  disableCartSubmitOrderButton();
};


var updateJerkyValueInCartView = function(){
  $("#jerky-quantity-shown-in-cart").click(function(){
    cart["jerkyInCart"] = Number($(this).val());
    renderCart();
  });
};

var updateTrailMixValueInCartView = function(){
  $("#nuts-quantity-shown-in-cart").click(function(){
    cart["trailMixInCart"] = Number($(this).val());
    renderCart();
  });
};

var createFlatRateShippingPopup = function(){
  $(".shipping-row").mouseenter(function(){
    $("#flat-rate-declaration-box").hide().fadeIn(500);
  });
  $(".shipping-row").mouseleave(function(){
    $("#flat-rate-declaration-box").hide();
  });
}


var disableCartSubmitOrderButton = function(){
  $("#submit-order-button").click(function(event){
    event.preventDefault();
  });  
}







































  // BEGINNING MESSAGE SETTINGS

const TIME_TO_VIEW_PHOTO_IN_ISOLATION     = 1500;

const TIME_FOR_DESCRIPTION_TO_FADE_IN     = 5500;

const TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS    = TIME_TO_VIEW_PHOTO_IN_ISOLATION + TIME_FOR_DESCRIPTION_TO_FADE_IN;

const TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE  = 2000;
const TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE = 1500;
const TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE  = 1500;
const TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE = 1500;


const TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR = TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE + TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE + TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE + TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE;

const TIME_FOR_DESCRIPTION_TO_DISAPPEAR   = 2500;

const TIME_FROM_START_UNTIL_CONTENT_APPEARS = TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS + TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR + TIME_FOR_DESCRIPTION_TO_DISAPPEAR;




























// IMAGE RESISZING

const WIDTH_OF_PRODUCT_IMAGE_AS_PERCENT_OF_DISPLAY_CONTENT = 27 /100;
const LINE_SPACING_OF_PRODUCT_CONTENT_TEXT_AS_PERCENT_OF_DISPLAY_CONTENT_DIV = 7 /100;

var resizeImage = function(){
  var displayContentWidth,
      widthOfProductPicture,
      widthOfProductPictureString;
  displayContentWidth = $("#display-content").width();
  widthOfProductPicture = WIDTH_OF_PRODUCT_IMAGE_AS_PERCENT_OF_DISPLAY_CONTENT * displayContentWidth;
  widthOfProductPictureString = widthOfProductPicture+"px";
  $(".product-picture").width(widthOfProductPicture);
  $(".product-image-container").css({"min-width": widthOfProductPictureString, "max-width": widthOfProductPictureString});
}

var resizeLogo = function() {
  var windowLength, // 13.8%;
      windowHeight,  // 10%
      lengthOfLogo,
      heightOfLogo;
  windowLength = $(window).width();
  windowHeight = $(window).height();
  lengthOfLogo = (windowLength * .138).toString() + "px";
  heightOfLogo = (windowHeight * .1).toString() + "px";
  $("#logo-pic").width(lengthOfLogo);
  $("#logo-pic").height(heightOfLogo);
}


var resizeContentTextHeight = function() {
/*  var displayContentHeight,
      determinedLineHeightOfText,
      lineHeightOfContentText;
  displayContentHeight = $("#display-content").height();
  determinedLineHeightOfText = (LINE_SPACING_OF_PRODUCT_CONTENT_TEXT_AS_PERCENT_OF_DISPLAY_CONTENT_DIV * displayContentHeight);
  lineHeightOfContentText = ( determinedLineHeightOfText ).toString() + "px";
  $(".content-text").css({"line-height": lineHeightOfContentText});
*/
}

var checkScreenSize = function(){
  if( $(window).height() > $(window).width() ){
    console.log("this was hit");
    $("#content").hide();
    $("#screen-warning").show();  
  } else{
    $("#content").show();
    $('#screen-warning').hide();
  }
}



// HTML of Pages
const SALMON_JERKY_HTML = `
          <div class='content-title'><p>Artisanal,<br>Handcrafted <b>Salmon Jerky</b></p></div>

          <div class = 'content-text'>
              <div id='jerky-image-container' class="product-image-container clickable">
                  <img id='jerky-image' class='product-picture' src='Smoked_Salmon.jpg'/>
                  <br>&nbsp;&nbsp;<b><span id='buy-jerky' class='Add-To-Cart-Below-Image clickable'>Add to Cart</span></b>
              </div>
              <div class='product-description' id="jerky-product-description">
                  Paleo Trek's Salmon are wild caught by native Kanak fishermen off the coast of New Caledonia. These pristine waters of the South Pacific ensure a mouth-watering quality of freshness unmatched in dried seafood culinary artistry. High in Protein. Low in Fat.
              </div>
          </div>
`;

const TRAIL_MIX_HTML =`
        <div class='content-title'><p>Bold, Uncomplicated,<br>Re-conceived <b>Trail Mix</b></p></div>

        <div class = 'content-text'>
            <div id='nuts-image-container' class="product-image-container clickable">
                <img id='nuts-image' class='product-picture' src='nuts.jpg'/>
                <br>&nbsp;&nbsp;<b><span id='buy-nuts' class='Add-To-Cart-Below-Image clickable'>Add to Cart</span></b>
            </div>
            <div class='product-description' id="trail-mix-product-description">
                Deep into the lush jungles of equatorial Peru, warmed and nourished by fertile soil and tropical sun, the seedlings of your trail mix exist to concentrate nutrients into power-packed morsels of tantalizing goodness. With pure-strength Cacao and exotic 'super-foods', this modern take on trail mix will power you past that next horizon.
            </div>
        </div>

`;

const ABOUT_HTML = `
          <div id = 'about-content-text'>
            <p class="about-text">
              Designwork: <a href="http://www.trajanson.com" target="_blank">www.Trajanson.com</a><br>
              The Odin Project: <a href="http://www.theodinproject.com/javascript-and-jquery/manipulating-the-dom-with-jquery?ref=lnav" target="_blank">Manipulating the DOM with jQuery</a></p><hr>
              <p class="about-text">Credits:
              <ul class="about-text">
                <li><a href="http://www.dafont.com/a-love-of-thunder.font" target="_blank">'A Love of Thunder' Font Created by Cumberland Fontworks*</a></li>
                <li><a href="http://picography.co/photos/winding-roads/" target="_blank">WINDING ROADS (Background Image) by Marko Berndt*</a></li>
                <li><a href="https://commons.wikimedia.org/wiki/File:Smoked_Salmon.jpg" target="_blank">Smoked Salmon picture created by	GEMalone*</a></li>
                <li><a href="https://commons.wikimedia.org/wiki/File:Studentenfutter_01.JPG" target="_blank">Studentenfutter (trail mix) picture created by Thogru*</a></li>
              </ul>
              <a class="about-text" href="README.md" target="_blank">*Terms of Use can be found in ReadMe</a>
            </p>
          </div>

`;

const CART_HTML = `
          <div class = 'content-text up-higher'>

            <table id="checkout-table" style="width:100%">
              <thead>
                <tr>
                  <th class="table-header">Product</th>
                  <th class="table-header">Price</th>
                  <th class="table-header">Quantity</th>
                  <th class="table-header">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr id="jerky-checkout-row">
                  <td>Artisinal Salmon Jerky<br><span class="size-declaration">Size: 1 oz</span></td>
                  <td>$19.95</td>
                  <td>
                      <input id="jerky-quantity-shown-in-cart" class="quantity-selection" type="number" step="1" min="0" max="999" value="1" style="width:50px;">
                  </td>
                  <td>$<span id="jerky-subtotal">19.95</span></td>
                </tr>

                <tr id="nuts-checkout-row">
                  <td>Imaginative Trail Mix<br><span class="size-declaration">Size: 1.5 oz</span></td>
                  <td>$9.95</td>
                  <td><input id="nuts-quantity-shown-in-cart" class="quantity-selection" type="number" step="1" min="0" max="999" value="1" style="width:50px;"></td>
                  <td>$<span id="nuts-subtotal">9.95</span></td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td colspan="4"></td>
                </tr>

                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">Subtotal</td>
                  <td>$<span id="total-subtotal">29.90</span></td>
                </tr>

                <tr>
                  <td>&nbsp;</td>
                  <td class="shipping-row" colspan="2">Shipping</td>
                  <td class="shipping-row" id="shipping-price">$4.95</td>
                </tr>

                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">Total</td>
                  <td>$<span id="total-total">34.85</span></td>
                </tr>

              </tbody>
            </table>

            <div>
              <form>
                <input id="submit-order-button" type="submit" value="Confirm Order">
              </form>
            </div>

            <div id="flat-rate-declaration-box"><span id="flat-rate-declaration">
                <h3>Flat Rate Shipping</h3>
                <p>Paleo Trek will ship for <b>one</b> price to <u>anywhere</u> in the world!</p>
            </span></div>

          </div>
`;

const EMPTY_CART_HTML = `

          <div class = 'content-text up-higher empty-cart'>

            <p>Sorry! There does not appear to be anything in your cart.</p>

          </div>
`;





































$(document).ready(function(){

      setProductPurchaseButton();










    // BEGIN IMAGE RESIZING EVENT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    resizeImage();
    resizeContentTextHeight();
    resizeLogo();
    $('#screen-warning').hide();
    checkScreenSize();


    $(window).resize(function(){
      resizeImage();
      resizeContentTextHeight();
      resizeLogo();
      checkScreenSize();
    });
    // END IMAGE RESIZING EVENT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















    // BEGIN NAVIGATION CONTROLS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Salmon Jerky Page
    $('#menu-option-1').click(function(){
      $('#display-content').html(SALMON_JERKY_HTML);
      resizeImage();
      current_mode = "salmon jerky";
      setProductPurchaseButton();
      resizeContentTextHeight();
    });

    // Trail Mix Page
    $('#menu-option-2').click(function(){
      $('#display-content').html(TRAIL_MIX_HTML);
      resizeImage();
      current_mode = "trail mix";
      setProductPurchaseButton();
      resizeContentTextHeight();
    });

    // About Page
    $('#menu-option-3').click(function(){
      $('#display-content').html(ABOUT_HTML);
      current_mode = "about";
      resizeContentTextHeight();
    });

    // Checkout Page
    $('#menu-option-4').click(function(){
      $('#display-content').html(CART_HTML);
      renderCart();
      current_mode = "cart";
      bindEventsToCartPage();
    });

    // Top Right Cart
    $('#cart-display').click(function(){
      $('#display-content').html(CART_HTML);
      renderCart();
      current_mode = "cart";
      bindEventsToCartPage();
    });

    // END NAVIGATION CONTROLS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















    // BEGIN MENU HOVER EVENTS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#menu-option-1").mouseenter(function(){
      $(this).css({"background-color": SALMON_JERKY_MENU_BACKGROUND_COLOR_ON_HOVER});
    });
    $("#menu-option-1").mouseleave(function(){
      $(this).css({"background-color": STANDARD_MENU_BACKGROUND});
    });

    $("#menu-option-2").mouseenter(function(){
      $(this).css({"background-color": TRAIL_MIX_MENU_BACKGROUND_COLOR_ON_HOVER});
    });
    $("#menu-option-2").mouseleave(function(){
      $(this).css({"background-color": STANDARD_MENU_BACKGROUND});
    });

    $("#menu-option-3").mouseenter(function(){
      $(this).css({"background-color": ABOUT_MENU_BACKGROUND_COLOR_ON_HOVER});
    });
    $("#menu-option-3").mouseleave(function(){
      $(this).css({"background-color": STANDARD_MENU_BACKGROUND});
    });

    $("#menu-option-4").mouseenter(function(){
      $(this).css({"background-color": CHECKOUT_MENU_BACKGROUND_COLOR_ON_HOVER});
    });
    $("#menu-option-4").mouseleave(function(){
      $(this).css({"background-color": STANDARD_MENU_BACKGROUND});
    });


    // END MENU HOVER CONTROLS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















    // BEGIN INITIAL MESSAGING SEQUENCE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Initial Message HTML
    //    "Delivering Wholesome Food to Your Final Frontier"
    //     - will flash various adjectives before disappearing to show the primary page content
    $("body").prepend(`
      <div id="initial-message">
      <span class="missing">Delivering</span><br>
      <span id="adjectives">Wholesome</span><span class="missing">&nbsp;&nbsp;Food<br>
      to Your Final Frontier...</span>
      </div>
    `);



    // step 1) hide content (it will appear after the sequence)
    $('#content').hide();

    // step 2) show message
    $('#initial-message').delay(TIME_TO_VIEW_PHOTO_IN_ISOLATION).hide().fadeIn(TIME_FOR_DESCRIPTION_TO_FADE_IN);

    // step 3) remove non-adjectives
    $('.missing').delay(TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS).fadeOut(TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE);


    // step 4) flash adjectives
    $("#adjectives").delay(TIME_FROM_START_UNTIL_INITIAL_MESSAGE_LOADS + TIME_FOR_FIRST_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
      $("#adjectives").text("Nutritious").css({"color": "brown", "font-size": "1.15em"});
    }).delay(TIME_FOR_SECOND_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
      $("#adjectives").text("Delicious").css({"color": "rgb(95,219,90)", "font-size": "1.25em"});
      $('#initial-message').css({ "right": "-4.5%", "top": "22%" });
    }).delay(TIME_FOR_THIRD_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
      $('#initial-message').css({ "right": "0%", "top": "26.5%" });
      $("#adjectives").text("Organic").css({"color": "red", "font-size": "1.35em"});
    }).delay(TIME_FOR_FOURTH_ADJECTIVE_TO_CHANGE).fadeOut(0).fadeIn(0, function(){
      $('#initial-message').css({ "top": "17%" });
      $("#adjectives").text("Anywhere").css({"color": "rgb(219,90,95)", "font-size": "1.75em"});
    });

    // step 5) remove message
    $('#initial-message').delay(TIME_FOR_MESSAGE_TO_WAIT_WHILE_ADJECTIVE_ANIMATIONS_OCCUR).fadeOut(TIME_FOR_DESCRIPTION_TO_DISAPPEAR);

    // step 6) show content
    $('#content').delay(TIME_FROM_START_UNTIL_CONTENT_APPEARS).fadeIn(TIME_FOR_DESCRIPTION_TO_DISAPPEAR);

    // END INITIAL MESSAGING SEQUENCE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


})