/**
 * 
 */

// 7.25 4교시 ================================

//console.log('aaa');
////alert('메롱!');	//확인될때까지 기달린드
////console.log('bbb');
//window.onload = function(){
//	alert('믿고 거르는 우엉');
//}
//
//console.log('bbb');
//
//alert('ccc');	//얘가먼져오죠ㅕ? 서-----순^^


function aaa(name){
	console.log('aaa: ' + name);
}

aaa('골-든 이글');

(function (name){
	console.log('aaa:  ' + name); 
	aaa('salami');
})('salami');

aaa('골-든 이글');


console.log('------------------------------');

function parent(){
		var a = 100;		//var 붙인것과 안붙인것 차이
		var b = 200;	//붙이면 {}에서만 사용가능한거!
						//any variable을 {}안에서만? VAR붙여!!
				//안그러면 다른데 영향줄 수 있아얄

		console.log('a: ' + a); //this.a는 undefined!
		console.log('b: ' + b);
		
		
		//안쪽에다 만들어야 (inner 함수)
		//접근을하지 이놈아!
		
		//이너함수는 함수내에서만 호출을 할 수 있도록
		//제약이 걸려있다
		
		//흠...그럼 함수리턴 이용하면 되겟지?
		
		//여기에 this찍으면 안돼
		function child(){
			var c = 300;
			
			console.log('c: ' + c);
			console.log('inner a: ' + a);
		}
		
		//이너함수는 안에서만 호출할 수 있다
		child();
}

function child(){
		var c = 300;
		
		console.log('c: ' + c);
		console.log('a: ' + a);
}

parent();
//child();







console.log('------------------------------');

function p1(){
	var name = '클레멘타인';
	var c1 = function (){
		console.log('name: ' + name);
	}
	return c1;
}


//c1();	//삐빅 안됨!
// inner함수는 함수 바깥에서 그냥 바로는 호출할 수 없다

var returnVal = p1();	//p1로 리턴받은 함수를
returnVal();			//호출한다!
			//마치 이너함수 호출한거랑 비슷해보인다


console.log('------------------------------');


function foo(){ //안줘도 arguments배열에 차오르긴 하다...
				//그냥 함수가 있다고해서(ex. bar())
	//인자없이 ()만 할수있는게아니고 여러개 넣어도
	//마치 오버로딩한것마냥 인자에 구애받지 않고
	//갯수에 따라서 분기해서 작업을 하게 되어있다.
	//내가 안 만들어도 함수를 만들면 무적권 만들어지는 객체!
//	console.log('a: ' + a + ', b: ' + b);
//	console.log(a, b);
	
	console.log(arguments.length);
	
	for(i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}

foo();
foo(1);
foo(1, 2);
foo(1, 2, 3); //에라가 안난다! 1은 a, 2는 b에 잘 전달되고 
			  //c는 내부적으로 arguments라는 곳에 전달이된다

console.log('------------------------------');

function sum(){
	console.log(arguments.length);
	var tot = 0;
	for(i = 0; i < arguments.length; i++){
//		console.log(arguments[i]);
		tot += arguments[i];
	}
	return tot;
}

sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5);
tot = sum(1, 2, 3, 4, 5, 1, 6, 3, 3, 1, 2, 6, 5);
console.log('tot: ' + tot);

console.log('------------------------------');
console.log('------------------------------');




//호출패턴과 this 바인딩

var obj1 = {
		name : 'John Cena',
		getName: function(){
			return this.name;	//여기에나 this를 쓰는거얌
		}
};

var obj2 = {
		name : 'java',
		address : 'seoul',
		getAddress: function(){
			return this.address;
		}
};

obj2.getName = obj1.getName; //위에있는게 요자리에 들어가는 느낌

console.log('obj1.name: ' + obj1.getName());
console.log('obj2.address: ' + obj2.getAddress());
console.log('obj2.name: ' + obj2.getName());




















