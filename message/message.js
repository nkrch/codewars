const sendMessage = (message) => {
  let str = ``;
  function getSymbol(letter) {
    switch (letter) {
      case ".":
        return "1";
        break;

      case ",":
        return "11";
        break;

      case "?":
        return "111";
        break;

      case "!":
        return "1111";
        break;

      case "a":
        return "2";
        break;

      case "b":
        return "22";
        break;

      case "c":
        return "222";
        break;

      case "d":
        return "3";
        break;

      case "e":
        return "33";
        break;

      case "f":
        return "333";
        break;

      case "g":
        return "4";
        break;

      case "h":
        return "44";
        break;

      case "i":
        return "444";
        break;

      case "j":
        return "5";
        break;

      case "k":
        return "55";
        break;

      case "l":
        return "555";
        break;

      case "m":
        return "6";
        break;

      case "n":
        return "66";
        break;

      case "o":
        return "666";
        break;

      case "p":
        return "7";
        break;

      case "q":
        return "77";
        break;

      case "r":
        return "777";
        break;

      case "s":
        return "7777";
        break;

      case "t":
        return "8";
        break;

      case "u":
        return "88";
        break;

      case "v":
        return "888";
        break;

      case "w":
        return "9";
        break;

      case "x":
        return "99";
        break;

      case "y":
        return "999";
        break;

      case "z":
        return "9999";
        break;

      case `'`:
        return "*";
        break;

      case "-":
        return "**";
        break;

      case "+":
        return "***";
        break;

      case "=":
        return "****";
        break;

      case " ":
        return "0";
        break;

      case "switchedCase":
        return "#";
        break;

      case "1":
        return "1-";
        break;

      case "2":
        return "2-";
        break;

      case "3":
        return "3-";
        break;

      case "4":
        return "4-";
        break;

      case "5":
        return "5-";
        break;

      case "6":
        return "6-";
        break;

      case "7":
        return "7-";
        break;

      case "8":
        return "8-";
        break;

      case "9":
        return "9-";
        break;

      case "0":
        return "0-";
        break;

      case "prev":
        return " ";
        break;

      case "#":
        return "#-";
        break;

      case "*":
        return "*-";
        break;
      default:
        break;
    }
  }

  let prevSym = "",
    chosedCase = "lower";
  for (let i = 0; i < message.length; i++) {
    //check if num
    // if not num => check previous
    // if the same => nothing
    // if not => switchedCase
    if (Number.isInteger(parseInt(message[i]))) {
      let gotten = getSymbol(message[i]);
      if (prevSym == gotten[0]) str += " ";
      str += gotten;
    } else {
      let gotten = getSymbol(message[i].toLowerCase());

      if (message[i] != message[i].toLowerCase() && chosedCase == "lower") {
        prevSym = "#";
        if (prevSym == gotten[0]) str += " ";

        chosedCase = "higher";
        str += getSymbol("switchedCase") + getSymbol(message[i].toLowerCase());
      } else if (
        message[i] !== message[i].toUpperCase() &&
        chosedCase == "higher"
      ) {
        prevSym = "#";

        if (prevSym == gotten[0]) str += " ";

        chosedCase = "lower";
        str += getSymbol("switchedCase");

        str += getSymbol(message[i].toLowerCase());
      } else {
        if (prevSym == gotten[0]) str += " ";

        str += getSymbol(message[i].toLowerCase());
      }
    }
    prevSym = str[str.length - 1];
  }

  // Start typing here
  return str;
};

console.log(sendMessage(".,?! '-+=*#"));
console.log(sendMessage("Hello World"));
