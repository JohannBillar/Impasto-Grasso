document.addEventListener("DOMContentLoaded", function init()	{
	
	function CL(log) {
		console.log(log);
	}

// insert message helper function	
//	function insertError(text, myClass) {  
//    var paragraph = document.createElement("p");
//    var textmessage = document.createTextNode(text);
//    paragraph.setAttribute("class", myClass + " bg-danger");
//		// paragraph.setAttribute("id", id)
//    paragraph.appendChild(textmessage);
//    document.getElementById("errormessage").appendChild(paragraph);
//  }  
	
	// Reveals ohter adress field
	document.getElementById("addressOther").setAttribute("class", "hidden");	
	addressType.onchange = function(sel) {
	 	if (sel.target.value == "Other") {
		  document.getElementById("addressOther").removeAttribute("class");
	 	} else {
		  document.getElementById("addressOther").setAttribute("class", "hidden");
		}
	}
	
//	// REQUIRE, LIMIT AND VALIDATE FORM FIELDS
//	// enters value for name, street address, apt, city, state, zipcode, phone, email
//	// selects address type
//	// reg expression for zip phone email
//	// reg expression for name contains no numbers
//	// only 2 characters in state
//  
////   username
//  document.pizzaOrderForm.username.onchange = function() {
//    var name = document.pizzaOrderForm.username.value;
//    var pattern = new RegExp(/\d/g).test(name);
//    var p = document.querySelector(".nameerror");
//    if (pattern === true && p === null) {
//      insertError("Hey, \"Names\" don't come with numbers in them.", "namerror");
//    } else if (pattern === false && p !== null) {
//       p.parentNode.removeChild(p);
//    }
//  }
//  // state
//  document.pizzaOrderForm.state.onchange = function() {
//    var state = document.pizzaOrderForm.state.value;
//    var pattern = new RegExp(/([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])/).test(state);
//    var p = document.querySelector(".stateerror");
//    if (pattern === false && p === null) {
//      insertError("State: only enter 2-digit - eg. CA, Ca, or ca", "stateerror");
//      } else if (pattern === true && p !== null) {
//       p.parentNode.removeChild(p);
//    }
//  }
//  //zip
//  document.pizzaOrderForm.zip.onchange = function() {
//    var zipcode = document.pizzaOrderForm.zip.value;
//    var pattern = new RegExp(/\d{5}(?:[-\s]\d{4})?/).test(zipcode);
//    var p = document.querySelector(".ziperror");
//    if (pattern === false && p === null) {
//    insertError("Enter the zipcode as: 92107, 92107-1234 or 92107 4444", "ziperror");
//    } else if (pattern === true && p !== null) {
//        p.parentNode.removeChild(p);
//    }
//  }
//  //phone
//  document.pizzaOrderForm.phone.onchange = function() {
//    var phonenum = document.pizzaOrderForm.phone.value;
//    var pattern = new RegExp(/1?(?:[.\s-]?[2-9]\d{2}[.\s-]?|\s?\([2-9]\d{2}\)\s?)(?:[1-9]\d{2}[.\s-]?\d{4}\s?(?:\s?([xX]|[eE][xX]|[eE][xX]\.|[eE][xX][tT]|[eE][xX][tT]\.)\s?\d{3,4})?|[a-zA-Z]{7})/).test(phonenum);
//    var p = document.querySelector(".phoneerror");
//    if (pattern === false && p === null) {
//    insertError("Enter phone number as: 9875551212, (987) 555-1212, or 987-555-1212", "phonerror");
//    } else if (pattern === true && p !== null) {
//        p.parentNode.removeChild(p);
//    } 
//  }
//  //email 
//  document.pizzaOrderForm.email.onchange = function() {
//    var emailaddress = document.pizzaOrderForm.email.value;
//    var pattern = new RegExp(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/).test(emailaddress);
//    var p = document.querySelector(".emailerror");
//    if (pattern === false && p === null) {
//    insertError("Only enter valid email addresses such as john-smith@example.com, john.smith@example.com or john_smith@x-ample.com.", "emailerror");
//    } else if (pattern === true && p !== null) {
//        p.parentNode.removeChild(p);
//    } 
//  }
	
// Form validation	
giantPizzaButton.addEventListener("click", function() {
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
  }
	else if (document.pizzaOrderForm.addressType.value === "") {
			document.pizzaOrderForm.addresstype.focus();
			window.alert("Please select your address type");
	} 
	else if (document.pizzaOrderForm.street.value === "") {
			document.pizzaOrderForm.street.focus();
			window.alert("Please enter your street name");
	}
	else if (document.pizzaOrderForm.city.value === "") {
			document.pizzaOrderForm.city.focus();
			window.alert("Please enter your city name");
	}
	else if (document.pizzaOrderForm.state.value === "" || statepattern === false)  {
			document.pizzaOrderForm.state.focus();
			window.alert("Pleaae enter your 2-digit statecode");
	}
	else if (document.pizzaOrderForm.zip.value === "" || zippattern === false) {
			document.pizzaOrderForm.zip.focus();
			window.alert("Enter a valid zipcode");
	}
	else if (document.pizzaOrderForm.phone.value === "" || phonepattern === false) {
			document.pizzaOrderForm.phone.focus();
			window.alert("Enter a valid phone number");
	}
	else if (document.pizzaOrderForm.email.value === "" || emailpattern === false) {
			document.pizzaOrderForm.email.focus();
			window.alert("Enter a valid email address");
	}
	 else if (document.pizzaOrderForm.dough.value === "") {
			window.alert("Please select your dough!");
	}
	else {
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
	doughSelect.onchange = function(sel) {
	 	if (sel.target.value !== "") {
		  document.getElementById("selectSize").disabled = false;
			document.getElementById("cheeseOptions").disabled = false;
			document.getElementById("sauceOptions").disabled = false;
			document.getElementById("selectToppings").removeAttribute("class", "hidden");
		}
	}
		
doughSelect.addEventListener("click", function() {
	
	
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
		Small: 9.99,
		Medium: 12.99,
		Large: 14.99
		},
	thinCrust: {
		Medium: 11.99,
		Large: 13.99	
		},
	newYorkStyle: {
		Large: 16.99,
		ExtraLarge: 19.99
		},
	glutenFree: {
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
		while(mySelect.firstChild) {
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

//		if (document.getElementById("selectSize") === undefined) {
//			document.pizzaOrderForm.doughselect.focus();
//			window.alert("Please select your dough first!"); }
	
}, false);
	

	// Shopping cart total
	buildbox.addEventListener("change", function(val) {
		
		var sizeInput = document.getElementById("selectSize").value;
		document.getElementById("amount").value = sizeInput; 

		var cheeseInput = document.getElementById("cheeseOptions").value;
		var total1 = eval(sizeInput + "+" + cheeseInput);
		document.getElementById("amount").value = total1;

		var sauceInput = document.getElementById("sauceOptions").value;
		var total2 = eval(sizeInput + "+" + cheeseInput + "+" + sauceInput);
		document.getElementById("amount").value = total2;
		
//		var toppings = document.getElementById("selectToppings");
//		CL(toppings);
		
//			var topbox = document.getElementsByName("topping").value;
//			var top;
//			for (var i = 0; i < topping.lenght; i++) {
//				if (topbox[i].checked === true) {
//					CL("checked");
//				}
//			}
//		
			var checkedValue = null; 
			var inputElements = document.getElementsByName("topping");
			for (var i = 0; inputElements[i]; i++){
      	if (inputElements[i].checked && inputElements[i].type === "checkbox") {
//           checkedValue = inputElements[i].value;
						CL(inputElements[i].checked);
				}
			}
//			CL(checkedValue);

}, false);	
	
		
	// Billing information from shipping
	billing.addEventListener("click", function() {
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
	
	// CC LOGIC STUFF
	cc.addEventListener("change", function() {
		var cardNumber;
		var cardNumberFirstDigit; 
		cardNumber = document.pizzaOrderForm.card.value;
		cardNumberFirstDigit = cardNumber.split('')[0];
		
		//Credit card validation logic
		
		//Validates CC number 
		//error message appears if user enters anything other than numeric,
		//number of digits is wrong
		
		var child = document.getElementById("ccFixText").firstChild;
    var numberPattern = new RegExp(/(([1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))/).test(cardNumber);
		var enoughNumberPattern = new RegExp(/[3|4|5|6]([0-9]{15}$|[0-9]{12}$|[0-9]{13}$|[0-9]{14}$)/).test(cardNumber);
    if ((cardNumber === "") || (numberPattern !== true) || (enoughNumberPattern !== true)) { 
			fixMe("Enter all the digits, no starting with Zero and no letters.", "ccFixText"); 
		}	
		if (numberPattern === true || enoughNumberPattern === true) {	
			if (child !== null) { child.parentNode.removeChild(child) }
		}
		// checks luhn algorythm on CC within listening event.

		//Luhn algorythm
		var luhn;
		var doubleNum = [];
		var notDoubledNum = [];

		luhn = cardNumber.split('').reverse();
		var int;
		for (int = 1; int < luhn.length; int += 2) {
			doubleNum += luhn[int] * 2;
		}
		luhn 
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
			fixMe("The card is invalid according to our super algorythm", "ccFixText");
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
	
	// CVC Code validation
	cvc.addEventListener("change", function() {
		var cvcNumber;
		cvcNumber = document.pizzaOrderForm.cvccode.value;
	
		var child = document.getElementById("cvcFixText").firstChild;
    var cvcPattern = new RegExp(/^[0-9]{3,4}$/).test(cvcNumber);
    if (cvcPattern !== true || cvcNumber === "") { 
			fixMe("Enter the 3 or 4 digits from your card.", "cvcFixText"); 
		}	
		if (cvcPattern === true) {	
			if (child !== null) { child.parentNode.removeChild(child) }
		}		
	}, false);
	
		
		month.addEventListener("change", function() {
			var month = document.pizzaOrderForm.selectmonth.value;
			return [month];
		}, false);	
	
		year.addEventListener("change", function() {
			var year = document.pizzaOrderForm.selectyear.value;
			return [year];
		}, false);
	
		
	// Sets copyright in footer	
	document.querySelector("footer").innerHTML = "&copy; Impasto Grasso " + new Date().getFullYear();
	
}, false);


