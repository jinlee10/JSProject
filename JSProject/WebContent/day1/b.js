/**
 * 	170724
 */

var foo = {
	name: 'foo',	//여러 개는 ,
	age: 30,
	major: 'computer science'
};

//foo.name
//foo['name']		// [name]안돼!!!!!!

for(var name in foo){	//여긴 for colon은 없어 instead, in 연산자가있다
	//var name은
//	console.log(name + ': ' + foo.name); //값에 접근하고싶어! -->얜 안됨
	console.log(name + ': ' + foo[name]); //여기선 ' ' 하면 안돼!
}

console.log(document);	//얜 일반적인 브라우저에서만 됨 (내장변수) guild-in, embedded
			//내장객체

//for(var name in document){
//	console.log(name + ': ' + document[name]); //doc안의 모든 프로퍼티들 접근
//}

// FOR IN에선s 실data접근시 대괄호!

var a = 100;
var b = 100;

var obja = {	value: 100 }; //json 리터럴
var objb = {	value: 100 }; //json 리터럴

var objc = objb;

console.log( a == b);
console.log( a == objb);
console.log( objb == objc);

// =, ==, === 연산자
//===은 strict인가가 들어가서 더강력하다구 함
var num1 = 10;
var num2 = '10';	

if(num1 === num2){
	console.log('같다');	//타입이 달라도 같다 나옴
}else{
	console.log('다름');	//타임이 다르면 달라!(타입까지 일치하게 비교)
}

// ==================== 함수 ==================

var a = 100;
var objd = {value : 100};


console.log('a: ' + a);
console.log('objd.value: ' + objd['value']);


function aaa(b, objt){
	b = 90;				//기본형 보낸걸 받아본다
	objt.value = 80;	//참조형 보낸걸 받아본다
	console.log('aaa');
}
aaa(a, objd);	//a: 메소드 호출하면서 b라는 기억장소 만들어서 값만 전달
			//함수 끝나면 b도 걍 없어지는것. a는 100야
			//objd가 가르키는곳에 value가있고 100이 있고
			//이걸 objt가 받아온다. objt가 똑같은걸 가르키니깐
			//함수 끝나면 objt가 없어지니깐 
			//objd.value가 80이 되는것이다

			//CALL BY VALUE, CALL BY REFERENCE

console.log('a: ' + a);
console.log('objd.value: ' + objd.value);


