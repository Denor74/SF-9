function fun(name) {
  document.write("Здравствуй " + name);
}

fun("Денис");

function generate(a) {
  return a * 100;
}

function init(b) {
  return b + generate(2);
}

document.write("<div>" + init(25) + "</div>");

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let resultFactorial = factorial(19);
console.log("resultFactorial - " + resultFactorial);

function toDo(atr) {
  var number = -10;

  if (number > 1) {
    return (number = -1);
  }

  return atr;
}

document.write("<div>" + toDo("al") + "</div>");
console.log(toDo("al"));

let hello = function () {
  return "Привет всем!";
};
console.log(hello());

function plus(a, b) {
  return a + b;
}
console.log(plus(4, 5));

function mnog(a, b) {
  return a * b;
}
console.log(mnog(4, 5));
function minus(a, b) {
  return a - b;
}

console.log('<div>' + minus(4, 5) + '</div>');

function delenie(a, b) {
  if (b == 0) {
    return "На ноль желить недбзя!!!!";
  } else {
    return a / b;
  }
}

console.log(delenie(2, 7));

function denNedeli(den) {
  switch (den) {
    case 1:
      return 'Понедельник';
      break;
    case 2:
      return 'Вторник';
      break;
    case 3:
      return 'Среда';
      break;
    case 4:
      return 'Четверг';
      break;
    case 5:
      return 'Пятница';
      break;
    case 6:
      return 'СУББОТА!';
      break;
    case 7:
      return 'Воскресенье, а завтра уже понедельник';
      break;
    default:
      return 'нет такого дня';
  }
}


console.log(denNedeli(7));
document.write('<p>' + denNedeli(7) + '</p>');