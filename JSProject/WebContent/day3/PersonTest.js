/**
 * 
 */

var person1 = new Person('존씨나');
var person2 = new Person('김두한');
var person3 = new Person('시라소니');

console.log(person1.getName());
console.log(person2.getName());
console.log(person3.getName());
console.log(person1.getName());

person3.setName('메롱시티시장');

console.log(person3.getName());



console.log('-------------------------------');
// ------------------------------------------------

// 2교시

console.log(person3);	//객체가나온다
console.log(person3.toString());	//object Object가나온다


var student1 = new Student('t001');
console.log(student1.getHakbun());

var std2 = new Student('존씨나', 33, 't002');
console.log(std2.toString());


























