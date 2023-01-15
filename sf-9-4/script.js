// 9.4 JSON

let student = {
  city: 'Moscow',
  firstName: 'Aleksey',
    age: 30,
    courses: ['html', 'css', 'javascript'],
  };

  let json = JSON.stringify(student);

  alert(json);
  console.log(json);

  let user = {
    dateOfBirth:'2020-07-30',
};

user.address = {

    city: 'Moscow',
    postalCode: 199000,
};

let jsonUser = JSON.stringify(user, ['dateOfBirth', 'address']);
let jsonUserFull = JSON.stringify(user, ['dateOfBirth', 'address', 'city', 'postalCode'], 2);

console.log(jsonUser);
console.log(jsonUserFull);

let userParse = {
  city: 'Moscow',
  name: 'Ann',
    age: 20,
  };
  let jsonUserParse = JSON.stringify(userParse); 
  let newJsObject = JSON.parse(jsonUserParse);
  console.log(newJsObject);


  //Дополнительное задание 9.4.6
  let objZadanie = {
    nameFrilancer: 'Денис',
    revenue: 200000,
  };

  let objZadanieJs = JSON.stringify(objZadanie);
  console.log(objZadanieJs);
  let objZadanieParse = JSON.parse(objZadanieJs);
  console.log(objZadanieParse);

// Дополнительное задание 9.4.7
  let nineFourSeven = {
    city: 'Saint-Petersburg',
    name: 'Petr',
     age: 25,
    };

    let nineFourSevenJs = JSON.stringify(nineFourSeven, ['name'], 5);
    console.log(nineFourSevenJs);

