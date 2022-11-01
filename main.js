const button = document.getElementsByTagName("button");
const space = document.getElementById("space");
const esc = document.getElementById("esc");
const tab = document.getElementById("tab");
const capsLock = document.getElementById("capsLock");
const enter = document.getElementById("enter");
const backspace = document.getElementById("backspace");
const lShift = document.getElementById("lShift");
const rShift = document.getElementById("rShift");
const lCtrl = document.getElementById("lCtrl");
const rCtrl = document.getElementById("rCtrl");
const lAlt = document.getElementById("lAlt");
const rAlt = document.getElementById("rAlt");
const tilde = document.getElementById("tilde");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const minus = document.getElementById("minus");
const equals = document.getElementById("equals");
const lBracket = document.getElementById("lBracket");
const rBracket = document.getElementById("rBracket");
const backslash = document.getElementById("backslash");
const forwardslash = document.getElementById("forwardslash");
const semicolon = document.getElementById("semicolon");
const quote = document.getElementById("quote");
const comma = document.getElementById("comma");
const dot = document.getElementById("dot");
const letters = document.getElementsByClassName("letter");

let upperCase = 1;

space.addEventListener("keydown", function () {
  console.log("spacja");
});

document.body.addEventListener("keydown", function (index) {
  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase() == index.key.toUpperCase()) {
      button[i].classList.add("active");
      event.preventDefault();
    } else if (index.keyCode == 32) {
      space.classList.add("active");
    } else if (index.keyCode == 27) {
      esc.classList.add("active");
    } else if (index.keyCode == 9) {
      tab.classList.add("active");
    } else if (index.keyCode == 20) {
      capsLock.classList.add("active");
      if (upperCase == 1) {
        for (let i = 0; i < letters.length; i++) {
          letters[i].innerHTML = letters[i].innerHTML.toLowerCase();
          upperCase--;
        }
      } else {
        for (let i = 0; i < letters.length; i++) {
          letters[i].innerHTML = letters[i].innerHTML.toUpperCase();
          upperCase++;
        }
      }
      return;
    } else if (index.keyCode == 13) {
      enter.classList.add("active");
    } else if (index.keyCode == 8) {
      backspace.classList.add("active");
    } else if (index.keyCode == 16) {
      tilde.textContent = "~";
      one.textContent = "!";
      two.textContent = "@";
      three.textContent = "#";
      four.textContent = "$";
      five.textContent = "%";
      six.textContent = "^";
      seven.textContent = "&";
      eight.textContent = "*";
      nine.textContent = "(";
      zero.textContent = ")";
      minus.textContent = "_";
      equals.textContent = "+";
      lBracket.textContent = "{";
      rBracket.textContent = "}";
      backslash.textContent = "|";
      forwardslash.textContent = "?";
      semicolon.textContent = ":";
      quote.textContent = '"';
      comma.textContent = "<";
      dot.textContent = ">";

      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lShift.classList.add("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rShift.classList.add("active");
      }
    } else if (index.keyCode == 17) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lCtrl.classList.add("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rCtrl.classList.add("active");
      }
    } else if (index.keyCode == 18) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lAlt.classList.add("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rAlt.classList.add("active");
      }
    }
  }
});

document.body.addEventListener("keyup", function (index) {
  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase() == index.key.toUpperCase()) {
      button[i].classList.remove("active");
    } else if (index.keyCode == 32) {
      space.classList.remove("active");
    } else if (index.keyCode == 27) {
      esc.classList.remove("active");
    } else if (index.keyCode == 9) {
      tab.classList.remove("active");
    } else if (index.keyCode == 20) {
      capsLock.classList.remove("active");
    } else if (index.keyCode == 13) {
      enter.classList.remove("active");
    } else if (index.keyCode == 8) {
      backspace.classList.remove("active");
    } else if (index.keyCode == 16) {
      tilde.textContent = "`";
      one.textContent = "1";
      two.textContent = "2";
      three.textContent = "3";
      four.textContent = "4";
      five.textContent = "5";
      six.textContent = "6";
      seven.textContent = "7";
      eight.textContent = "8";
      nine.textContent = "9";
      zero.textContent = "0";
      minus.textContent = "-";
      equals.textContent = "=";
      lBracket.textContent = "[";
      rBracket.textContent = "]";
      backslash.textContent = "\\";
      forwardslash.textContent = "/";
      semicolon.textContent = ";";
      quote.textContent = "'";
      comma.textContent = ",";
      dot.textContent = ".";
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lShift.classList.remove("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rShift.classList.remove("active");
      }
    } else if (index.keyCode == 17) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lCtrl.classList.remove("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rCtrl.classList.remove("active");
      }
    } else if (index.keyCode == 18) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lAlt.classList.remove("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rAlt.classList.remove("active");
      }
    }
  }
});
