/**
 * 	170724
 */

var a = 10;
console.log('typeof a: ' + typeof a + ', valueof a: ' + a);

// 2교시

//숫자형 자료 타입

var num = 5;
var num1 = 2;
var num2 = num / num1;	//무적권 실수연산^^

console.log('num2: ' + num2);
console.log(Math.floor(num2));

// java Math 클래스마냥있는데 여기선 내장함수라함

//문자열 자료 타입

var str = '오스트레일리아';

num2 = str;	//gjf;;;  가변타입이라 num2에 str넣어도 에라 아니죠?
console.log('num2: ' + num2);

//유연하다 -썜피셜 장점이자 단점
console.log('num2 0번째 문자: ' + num2[0]);

num2[1] ='망';

console.log(num2[1]);

if(num >= 10){
	console.log('맞음');
}else{
	console.log('틀림');
}

// //// 

var ab; //undefined
var ab1;
ab1 = null;
console.log('ab value: ' + ab1); 
		
//참조형
var foo = new Object();
foo.name = 'JOHN CENA';
foo.age = 33;

console.log('foo: ' + foo);
console.log('foo.age: ' + foo.age);

var bar = {
		name : 'shim young', // =이아니라 내부프로퍼티는 콜론!
		age : 30,
		gender : true
};

bar.age = 94;

console.log(bar.name);
console.log(bar.age);


// p.42실습
// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
		name : 'foo',
		major : 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);


//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);


/////// 나머지 42페이지에서 계--속!



