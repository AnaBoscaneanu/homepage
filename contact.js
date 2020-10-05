//BOOK A MEETING form validation

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form

function validateForm() {
  // Retrieving the values of form elements
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var date = document.contactForm.date.value;
  var msg = document.contactForm.message.value;

  // Defining error variables with a default value
  var nameErr = emailErr = dateErr = msgErr = true;

  //Validate message
  if (msg == "") {
      printError("msgErr", "Please enter a message");
  } else {
      printError("msgErr", "");
      msgErr = false;
  }

  //Validate date
  if (date == "") {
    printError("dateErr", "Please choose a date");
  } else {
    printError("dateErr", "");
    dateErr = false;
  }

  // Validate name
  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || dateErr || msgErr) === true) {
    return false;
  }
}

//Set min date to today

formDate.min = new Date().toISOString().split("T")[0];
