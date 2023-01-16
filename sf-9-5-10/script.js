function fun() {

  if (true) {
      let variable1 = 'string value 1';
      console.log(variable1);  

  }


  if (true) {
      const variable2 = 'string value 2';
      console.log(variable2);
  }

   
  
}

fun();

// 9.6. Замыкания


function createCounter (counter=0) {

  return function updateCounter(){
      console.log(counter++);
  }

}

let test = createCounter(5);

test();
test();
test();

var something = "глобальная переменная";

function check()
{
    var something = "локальная переменная";
    function f()
    {
        return something;
    }

    return f();
}
console.log(check());

//9.8. Стрелочные функции

let obj = {

  characteristic: 'text',

  anonFunction: function() {
          console.log(this.characteristic);
  },

  arrowFunction: function() {
      let arrow = () => {
          console.log(this.characteristic);
      };
      arrow();
  }

};

obj.anonFunction();
obj.arrowFunction();

// Стрелочные функции могут использоваться как методы объекта:
// Важно! Такой подход НЕ рекомендуется к использованию, так как в методах важен контекст выполнения this.
obj = {
  method:() => {    
      console.log('abc');
  }
};


obj.method();

//Задание 9.8.2
let phone = {
  brand: "Nokia",
  model: "N8",
  color: "Red",
  getModel: () => {
    return this.model;
      
  },
  getColor: function() {
    return this.color;
      
      
  }
};

// Задание 9.8.3
// Расшифруйте код стрелочной функции в обычную пользовательскую функцию.
const quiz = a => b => a + b;
console.log(quiz);

const quiz1 = function (a) {
  return function (b) {
      return a + b
  }
}
console.log(quiz1());

// 9.9. Функция обратного вызова callback
// Обоснование передачи функции в качестве аргумента

let funCallback = function () {
  return 'Привет!';
};

console.log(funCallback()); // Привет!
console.log(funCallback); // ƒ () { return 'Привет!'; }

// Примеры передачи callback функции
function main(name, number) {
  alert( `Привет ${ name }! Твой номер ${ number() }` );
}

function callback () {
  return parseInt(Math.random()*4+1);
}

main( `Пётр`, callback);


// ---------------------------------

function advertisement(question, yes, no) {

  if (confirm(question))
  {
      yes();
  }


  else
  {
      no();
  }
}

function ok() {
  let  amount = '50%';
  alert( `Ваша скидка ${amount}!` );
}

function cancel() {
  alert(`Возвращайтесь ещё!` );
}

advertisement(`Нажмите на кнопку "ОК", чтобы получить скидку`, ok, cancel);

// --------------------------------------

function createCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(numbers) {
    console.log(numbers);
}

// Вызов функции

createCallback(callback);

// 9.10. Каррирование
console.log(' 9.10. Каррирование');
function sum (a) {

    return function (b)  {

        return function (c)  {

            return a + b + c;

        }

    }

}

console.log(sum(1)(2)(7));

console.log('Расчёт объёма прямоугоьной призмы стрелочными функциями');

let prism = function(length, width, height) {
    return length * width * height;
}



console.log(prism(6,5,8));

// Каррирование этой функции будет выглядеть так:

function prism1(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        }
    }
}

console.log(prism1(6)(5)(8));

// Каррирование стрелочной функцией:

let prism2 = length => width => height => length * width * height;

console.log(prism2(6)(5)(8));

// Задание 9.10.2

function message(a) {
    return (b) => {
        return (c) => {
            return b;
        }
    }
}

console.log(message(1)(2)(3));
console.log(message(3)(2)(1));

