/**
 * 
 */

// 7.25 1교시 ================================

//함수 만드는 세 가지 방법
// 1) 함수 리터럴
function func1(){
	
}

// 2) 함수 표현식 (Anonymous Function)
var fna = function(){
	
};

// 3) new Function();

//객체만드는 방법들
var obj = {
	name : '존씨나',	// JSON은 키 : 밸류
	setName : function(name){this.name = name;}
};

// property 삽입 가능, 함수도 넣어줄 수 있음

// function making
var foo = function (a){ // 함수를 인자로 받아서
	a();	//그 함수를 실행한다
//	console.log(a + 1);
};

var num = function(){ //anonymous function
	console.log('aaaa');
};

foo(function(){		// foo를 호출하는데 인자로 함수를준다
	console.log('aaaa1');
});


// 함수 표현식
var foo1 = function(){
//	var fn = function(){
//		console.log('fn');
//	};
	//리턴값이 함수!
	return function(){
		console.log('fn');
	};
};

var foo2 = foo1;

foo2(); //fn이 실행되는것이기 때문에 
// 츨력은 fn이 책임진다



var foo3 = function ( a, b, c ){
	return 2 + 5;
}


console.dir(foo3);













