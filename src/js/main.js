//---------first program-----------

// for (var i = 100; i >= 0; i -= 2) {
//     console.log(i);
// }


//-------second program-----------

// var firstNumber = prompt("Type first Number");
// var secondNumber = prompt("Type second Number");
// var result = 0;
//
// if (firstNumber <= secondNumber) {
//     for (var i = +firstNumber; i <= +secondNumber; i++) {
//         result += i;
//     }
// } else
//     for (var j = +secondNumber; j <= +firstNumber; j++) {
//         result += j;
//     }
// console.log(result);

//-------third program------------

// var result = 0;
//
// for (var i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         result += i;
//     }
// }
// console.log(result);

//--------fourth program----------

// do {
//     var number = prompt("Type a number of a month from 1 to 12");
//
//     switch (number) {
//         case "1":
//             var month = "January";
//             break;
//         case "2":
//             month = "February";
//             break;
//         case "3":
//             month = "March";
//             break;
//         case "4":
//             month = "April";
//             break;
//         case "5":
//             month = "May";
//             break;
//         case "6":
//             month = "June";
//             break;
//         case "7":
//             month = "July";
//             break;
//         case "8":
//             month = "August";
//             break;
//         case "9":
//             month = "September";
//             break;
//         case "10":
//             month = "October";
//             break;
//         case "11":
//             month = "November";
//             break;
//         case "12":
//             month = "December";
//             break;
//         default:
//             month = "Wrong number";
//             break;
//     }
//     console.log(month);
// } while (number < 1 || number > 12);

//---------fifth program----------

// var exponent = 0;
// var result = 0;
//
// for (var i = 0; i <= 30; i++) {
//     exponent = Math.pow(2, i);
//     result += exponent;
// }
// console.log(result);