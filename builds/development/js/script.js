(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();

// Pizza form validation
document.addEventListener("DOMContentLoaded", function init() {
  'use strict';
  
  var cartValue = document.getElementById("amount").value;
  if (cartValue === "0") {
    document.getElementById("cart").setAttribute("class", "hidden");
  } else {
    document.getElementById("cart").removeAttribute("class");
  }


  // Hides/Shows OTHER address field
  document.getElementById("addressOther").setAttribute("class", "hidden");
  addressType.onchange = function (sel) {
    if (sel.target.value == "Other") {
      document.getElementById("addressOther").removeAttribute("class");
    } else {
      document.getElementById("addressOther").setAttribute("class", "hidden");
    }
  }

  // Form validation	
  giantPizzaButton.addEventListener("click", function () {
    var name = document.pizzaOrderForm.username.value;
    var namepattern = new RegExp(/\d/g).test(name);
    var state = document.pizzaOrderForm.state.value;
    var statepattern = new RegExp(/([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])/).test(state);
    var zipcode = document.pizzaOrderForm.zip.value;
    var zippattern = new RegExp(/\d{5}(?:[-\s]\d{4})?/).test(zipcode);
    var phonenum = document.pizzaOrderForm.phone.value;
    var phonepattern = new RegExp(/1?(?:[.\s-]?[2-9]\d{2}[.\s-]?|\s?\([2-9]\d{2}\)\s?)(?:[1-9]\d{2}[.\s-]?\d{4}\s?(?:\s?([xX]|[eE][xX]|[eE][xX]\.|[eE][xX][tT]|[eE][xX][tT]\.)\s?\d{3,4})?|[a-zA-Z]{7})/).test(phonenum);
    var emailaddress = document.pizzaOrderForm.email.value;
    var emailpattern = new RegExp(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/).test(emailaddress);
    if (document.pizzaOrderForm.username.value === "" || namepattern === true) {
      document.pizzaOrderForm.username.focus();
      window.alert("Please fix your name");
    } else if (document.pizzaOrderForm.addressType.value === "") {
      document.pizzaOrderForm.addresstype.focus();
      window.alert("Please select your address type");
    } else if (document.pizzaOrderForm.street.value === "") {
      document.pizzaOrderForm.street.focus();
      window.alert("Please enter your street name");
    } else if (document.pizzaOrderForm.city.value === "") {
      document.pizzaOrderForm.city.focus();
      window.alert("Please enter your city name");
    } else if (document.pizzaOrderForm.state.value === "" || statepattern === false) {
      document.pizzaOrderForm.state.focus();
      window.alert("Pleaae enter your 2-digit statecode");
    } else if (document.pizzaOrderForm.zip.value === "" || zippattern === false) {
      document.pizzaOrderForm.zip.focus();
      window.alert("Enter a valid zipcode");
    } else if (document.pizzaOrderForm.phone.value === "" || phonepattern === false) {
      document.pizzaOrderForm.phone.focus();
      window.alert("Enter a valid phone number");
    } else if (document.pizzaOrderForm.email.value === "" || emailpattern === false) {
      document.pizzaOrderForm.email.focus();
      window.alert("Enter a valid email address");
    } else if (document.pizzaOrderForm.dough.value === "") {
      window.alert("Please select your dough!");
    } else {
      var buttonChoice = window.confirm("Are you sure that you're done?");
      if (buttonChoice === true) {
        document.getElementById("billingbox").setAttribute("class", "");
        document.getElementById("giantPizzaButton").disabled = true;
      }
    }
  }, false);

  //logic to force customer to select dough before cheese, etc.	
  document.getElementById("selectSize").disabled = true;
  document.getElementById("cheeseOptions").disabled = true;
  document.getElementById("sauceOptions").disabled = true;
  document.getElementById("selectToppings").setAttribute("class", "hidden");

  doughSelect.onchange = function (sel) {
    if (sel.target.value !== "") {
      document.getElementById("selectSize").disabled = false;
      document.getElementById("cheeseOptions").disabled = false;
      document.getElementById("sauceOptions").disabled = false;
      document.getElementById("selectToppings").removeAttribute("class", "hidden");
    }
  }

  doughSelect.addEventListener("click", function () {

    // Makes cart visible
    document.getElementById("cart").removeAttribute("class");

    //Gets values from radio button input
    var radios = document.getElementsByName("dough");
    var dough;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === "radio" && radios[i].checked) {
        dough = radios[i].value;
      }
    }

    var pizzaSizes = {
      handTossed: {
        Small: 9.99
        , Medium: 12.99
        , Large: 14.99
      }
      , thinCrust: {
        Medium: 11.99
        , Large: 13.99
      }
      , newYorkStyle: {
        Large: 16.99
        , ExtraLarge: 19.99
      }
      , glutenFree: {
        Small: 10.99
      }
    };

    var sizeDrop;
    if (dough === "handTossed") {
      sizeDrop = pizzaSizes.handTossed;
    } else if (dough === "thinCrust") {
      sizeDrop = pizzaSizes.thinCrust;
    } else if (dough === "newYorkStyle") {
      sizeDrop = pizzaSizes.newYorkStyle;
    } else {
      sizeDrop = pizzaSizes.glutenFree;
    }

    if (dough !== "") {
      var mySelect = document.getElementById("selectSize");
      while (mySelect.firstChild) {
        mySelect.removeChild(mySelect.firstChild);
      }

      for (i in sizeDrop) {
        var textDrop;
        var dropValue = [];
        textDrop = i + " " + sizeDrop[i];
        dropValue += sizeDrop[i];
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(textDrop);
        newOption.setAttribute("value", dropValue);
        newOption.appendChild(newContent);
        document.getElementById("selectSize").appendChild(newOption);
      }
    }
  }, false);

  // BUILDBOX - pizza add to cart feature
  buildbox.addEventListener("change", function (val) {

    selectToppings.addEventListener("change", function (event) {
      event.stopPropagation();
    });

    var pizzaSize = document.getElementById("selectSize").value;
    var cheeseInput = document.getElementById("cheeseOptions").value;
    var sauceInput = document.getElementById("sauceOptions").value;

    var total2 = eval(pizzaSize + "+" + cheeseInput + "+" + sauceInput).toFixed(2);
    document.getElementById("amount").value = total2;
  }, false);

  // Pizza toppings cart logic
  selectToppings.addEventListener("change", function (val) {

    var checkBoxChecked = val.target.checked;

    if (checkBoxChecked === true) {
      document.getElementById("amount").value = document.getElementById("amount").value += " + 0.99";
    }
    if (checkBoxChecked === false) {
      document.getElementById("amount").value = document.getElementById("amount").value += " - 0.99";
    }

    var calc = eval(document.getElementById("amount").value).toFixed(2);
    document.getElementById("amount").value = calc;
  }, false);

  // BILLING - pull billing information from shipping
  billing.addEventListener("click", function () {

    var check = document.getElementById("billing").checked;

    if (check === true && document.pizzaOrderForm.username.value !== "") {
      document.pizzaOrderForm.billingname.value = document.pizzaOrderForm.username.value;
      document.pizzaOrderForm.billingstreet.value = document.pizzaOrderForm.street.value;
      document.pizzaOrderForm.billingapt.value = document.pizzaOrderForm.apt.value;
      document.pizzaOrderForm.billingcity.value = document.pizzaOrderForm.city.value;
      document.pizzaOrderForm.billingstate.value = document.pizzaOrderForm.state.value;
      document.pizzaOrderForm.billingzip.value = document.pizzaOrderForm.zip.value;
    } else {
      document.pizzaOrderForm.billingname.value = "";
      document.pizzaOrderForm.billingstreet.value = "";
      document.pizzaOrderForm.billingapt.value = "";
      document.pizzaOrderForm.billingcity.value = "";
      document.pizzaOrderForm.billingstate.value = "";
      document.pizzaOrderForm.billingzip.value = "";
    }
  }, false);

  // Billing address validation
  document.pizzaOrderForm.billingname.addEventListener("change", function () {
    var name = document.pizzaOrderForm.billingname.value;
    var namepattern = new RegExp(/\d/g).test(name);
    if (document.pizzaOrderForm.billingname.value === "" || namepattern === true) {
      document.pizzaOrderForm.billingname.focus();
      window.alert("Please fix your name");
    }
  }, false);
  document.pizzaOrderForm.billingstreet.addEventListener("change", function () {
    if (document.pizzaOrderForm.billingstreet.value === "") {
      document.pizzaOrderForm.billingstreet.focus();
      window.alert("Please enter your street name");
    }
  }, false);
  document.pizzaOrderForm.billingcity.addEventListener("change", function () {
    if (document.pizzaOrderForm.billingcity.value === "") {
      document.pizzaOrderForm.billingcity.focus();
      window.alert("Please enter your city name");
    }
  }, false);
  document.pizzaOrderForm.billingstate.addEventListener("change", function () {
    var state = document.pizzaOrderForm.billingstate.value;
    var statepattern = new RegExp(/([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])/).test(state);
    if (document.pizzaOrderForm.billingstate.value === "" || statepattern === false) {
      document.pizzaOrderForm.billingstate.focus();
      window.alert("Pleaae enter your 2-digit statecode");
    }
  }, false);
  document.pizzaOrderForm.billingzip.addEventListener("change", function () {
    var zipcode = document.pizzaOrderForm.billingzip.value;
    var zippattern = new RegExp(/\d{5}(?:[-\s]\d{4})?/).test(zipcode);
    if (document.pizzaOrderForm.billingzip.value === "" || zippattern === false) {
      document.pizzaOrderForm.billingzip.focus();
      window.alert("Enter a valid zipcode");
    }
  }, false);

  // CC Stuff
  // START CC helper function to insert error message
  function fixMe(text, elementid) {
    var paragraph = document.createElement("p");
    var textmessage = document.createTextNode(text);
    paragraph.setAttribute("class", "bg-danger");
    paragraph.appendChild(textmessage);
    document.getElementById(elementid).appendChild(paragraph);
  }
  // helper function to insert error message
  // set image
  function setCCImage(url) {
    var image = document.createElement("img");
    image.setAttribute("src", url);
    document.getElementById("ccicon").appendChild(image);
  }

  // END CC helper functions

  //CC validation logic
  cc.addEventListener("change", function () {
    var cardNumber;
    var cardNumberFirstDigit;
    cardNumber = document.pizzaOrderForm.card.value;
    cardNumberFirstDigit = cardNumber.split('')[0];

    //Validates CC number 
    //error message appears if user enters anything other than numeric,
    //or number of digits is wrong		
    var child = document.getElementById("ccFixText").firstChild;
    var numberPattern = new RegExp(/(([1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))/).test(cardNumber);
    var enoughNumberPattern = new RegExp(/[3|4|5|6]([0-9]{15}$|[0-9]{12}$|[0-9]{13}$|[0-9]{14}$)/).test(cardNumber);
    if ((cardNumber === "") || (numberPattern !== true) || (enoughNumberPattern !== true)) {
      fixMe("Enter all the digits, no starting with Zero and no letters.", "ccFixText");
    }
    if (numberPattern === true || enoughNumberPattern === true) {
      if (child !== null) {
        child.parentNode.removeChild(child)
      }
    }

    // Checks luhn algorythm on CC within listening event.
    // Luhn algorythm
    var luhn;
    var doubleNum = [];
    var notDoubledNum = [];

    luhn = cardNumber.split('').reverse();
    var int;
    for (int = 1; int < luhn.length; int += 2) {
      doubleNum += luhn[int] * 2;
    }
    // luhn 
    var ct;
    for (ct = 0; ct < luhn.length; ct += 2) {
      notDoubledNum += luhn[ct];
    }

    var x = doubleNum.split('').join(' + ');
    x = eval(x);
    var y = notDoubledNum.split('').join(' + ');
    y = eval(y);
    var total = eval(x + y);
    if (total % 10 !== 0) {
      fixMe("The card is invalid according to our Super algorythm", "ccFixText");
    }

    // Display CC type image (next to expiration) based on the entered card number prefix 
    if ((numberPattern === true) && (enoughNumberPattern === true) && (total % 10 === 0)) {
      cardNumberFirstDigit
      switch (cardNumberFirstDigit) {
      case "4":
        setCCImage('../img/visa.png');
        break;
      case "5":
        setCCImage('../img/ma.png');
        break;
      case "6":
        setCCImage('../img/discover.png');
        break;
      case "3":
        setCCImage('../img/amex.png');
        break;
      default:
        setCCImage('../img/pizzacc.png');
      }
    }
  }, false);

  // CVC validation
  cvc.addEventListener("change", function () {

    var cvcNumber;
    cvcNumber = document.pizzaOrderForm.cvccode.value;

    var child = document.getElementById("cvcFixText").firstChild;
    var cvcPattern = new RegExp(/^[0-9]{3,4}$/).test(cvcNumber);
    if (cvcPattern !== true || cvcNumber === "") {
      fixMe("Enter the 3 or 4 digits from your card.", "cvcFixText");
    }
    if (cvcPattern === true) {
      if (child !== null) {
        child.parentNode.removeChild(child)
      }
    }
  }, false);

  // CC Expiration date NEEDS WORK
  expiration.addEventListener("change", function () {

    var month;
    var year;
    var checkDate;
    month = (document.getElementById("month").value);
    year = (document.getElementById("year").value);
    checkDate = month + year;

    checkDate = checkDate.split('');
    month = checkDate.shift(0);
    month += checkDate.shift(0);
    year = checkDate.shift(0);
    year += checkDate.shift(0);
    year += checkDate.shift(0);
    year += checkDate.shift(0);
    var currentMonth = new Date().getMonth() + 1;
    var currentYear = new Date().getFullYear();
    var child = document.getElementById("expFixText").firstChild;

    if (month < currentMonth && year <= currentYear) {
      fixMe("Expiration date has to be further out than today.", "expFixText");
    } else {
      if (child !== null) {
        child.parentNode.removeChild(child);
      }
    }

  }, false);

  // Sets copyright in footer	
  document.querySelector("footer").innerHTML = "&copy; Impasto Grasso " + new Date().getFullYear();

}, false);
},{}]},{},[1])