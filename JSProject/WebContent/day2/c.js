/**
 * 
 */

// 7.25 2교시 ================================

// 함수함수 해보장 //length 프로퍼티

function f1(){
	
}

function f2(x){
	return x;
}

function f3(x, y){
	return x + y;
}

function f4(x, y, z){
	console.log('f4의 매개변수 갯수: ' + f4.length);
	return x + y + z;
}

f4(1, 2, 3);

//f4.iname = '김두한';	//함수는 객체다 참조

console.log(f1.length);	//함수가 갖는 기본 프로퍼티
console.log(f2.length);	
console.log(f3.length);	
console.log(f4.length);	




console.log('----------------------------');
// 3교시 ================================


function Foo(){		//함수가 존재해유!
//	return x + y;
}

console.log('foo.name: ' + Foo.name);	//만든적 없지만 기본속성야
console.log(Foo.prototype); // 모든 '객체'가 갖는 prototype!
console.log(Foo.prototype.constructor); //new라고쓰면 이게 생성자가된다

var foo1 = new Foo();
console.log(foo1);




