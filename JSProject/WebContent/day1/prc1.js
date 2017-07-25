/**
 * 	170724일자 복습
 */

// =====  a  =================================

//data types - number :always float # calculation
// Math.* -> embedded fuction
var num = 5;
var num1 = 2;
var num2 = num / num1;

console.log('num2: ' + num2);
console.log('num2: ' + Math.floor(num2));

//string data types - flexible
var str = 'pneumonoultrascopicsilicovolcanoconiosis';

num2 = str; //가변.
console.log('num2: ' + num2);

console.log('num2[0]: ' + num2[0]); // charAt[0]
num2[1] = 'N';
console.log('num2[0]: ' + num2[0]); // charAt[0]

if(num > 10){
	console.log('num은 10보다 크다');
}else{
	console.log('응 아니야 num은 10보다 안커');
}

// undefined
var ab; // <- undefined
var ab1;
ab1 = null;	 //null
console.log('ab1 val: ' + ab1);

//-----reference type -----
var foo = new Object();
foo.name = 'John Cena';

console.log('foo: ' + foo);
console.log('foo.age: ' + foo.age);

var bar = {
		name : 'shim yong',
		age : 30,
		gender : true
};

bar.age = 94;

console.log('bar.name: ' + bar.name);
console.log('bar.age: ' + bar.age);

// 객체 생성 3가지 방법들
var foo = {
		name: 'foo',
		major: 'computer sci'
};

// property read
console.log(foo.name + ', ' + foo['name'] + ', ' + foo.nickname);
console.log(foo);




// =====   d   =====================================

// 함수와 prototype chaining

// 함수 만들기
// 1) 함수 리터럴
function sum(x, y){
	tot = x + y;
	return tot;
}

var num = sum(3, 4);
console.log('num: ' + num);

// 2) 함수 표현식(함수를 어떤 값에 대입하죠?)
var adder = function(x, y){
	return x + y;
}

var num999 = adder;
console.log('sum: ' + num999(77, 188));

// 3) 함수 생성자 'F' //생성자 안에 다 넣어버리기~
var yolo = new Function('a', 'b', 'c', 'return a + b + c;');
var b = yolo(22, 33, 44);

console.log('b: ' + b);


//함수도 객체다잉
var obj = {
		name : 'hello',
		sum1 : function(x, y){
			return x + y;
		},
};

var num = obj.sum1(7, 8);
console.log('num: ' + num);






