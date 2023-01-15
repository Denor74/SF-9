let persona = {
  name: 'Денис',
  age: 47,
  job: {
    permanentJob: 'head',
    additional: 'webDeveloper',

  },
};

alert("name" in persona);

console.log(persona.job);
document.write(persona.job);
document.write(persona.job.additional);
console.log(persona.name = 'Denor');
document.write(persona.job.permanentJob = '<div>web developer</div>');
document.write(persona.job.additional = '<div>freelancer</div>');
persona.speciality = 'PHP';
console.log(persona);

let vvod = prompt('введите данные для вывода в Объект', 'vvodData');

let vvodObekt = {
  [vvod]: 'цвет оранжевый',
  colorInoy : 'dannye',
};




let car1 = {
  color: 'red',
};

console.log(car1.color = 'yellow');

console.log(car1['color'] = 'blue');


let car = {
  name:"Audi",
  year:2000,
  engineStarted:false,
  start: startEngine
};

let car2 = {
  name:"Mercedes",
  year:2015,
  engineStarted:false,
  start: startEngine
};


function startEngine(){
  if (this.engineStarted === false) {

      this.engineStarted=true;
      alert(`Автомобиль ${ this.name} запущен!`);
  }

}

car.start();
car2.start();


let square = {
  side_length: 4,
  area: calc
};

function calc () {
  let a = this.side_length;
  return a * a;
}

console.log(square.area());

// Дополнительное задание 9.3.4
let student = {
  name: "Ivan Petrov",
  course: "javascript",
  group: 5
};

document.write('<p>Вывод имени студента ' + student.name + '</p>');
delete student.name;
document.write('<p>Вывод имени студента ' + student.name + '</p>');

// Дополнительное задание 9.3.5

let volumeWater = prompt('Сколько грамм воды налить в чашку?', 200);

let cup = {
  volumeCap: 250,
  volumeWaterCup: volumeMax,
};

function volumeMax() {
  if (volumeWater > 250) 
  return this.volumeWaterCup = 'Стакан слишком мал для такого объема';
  else {
    return this.volumeWaterCup = 'Приятно не засохнуть!';
  }
}

alert(cup.volumeWaterCup());

// Дополнительное задание 9.3.6

let objectName = prompt('Введите наименование искомого свойтсва объекта', 'NameObject');

function searchObject() {
  console.log(objectName);
  
let objectNameNew = "${objectName}" in objectDefin;
console.log(objectNameNew);
if (objectNameNew === false)
console.log("Такого свойства в объекте objectDefin нет!");

else {
  
  console.log('Свойство ' +  objectName + ' имеет значение ');
  let returnValue = 'Свойство ' +  objectName + ' имеет значение ';

}
}

let objectDefin = {
  metodFunction: searchObject,
  feature0: 'Значение свойства 0',
  feature1: 'Значение свойства 1',
  feature2: 'Значение свойства 2',
  
};

console.log(objectDefin.metodFunction());

