/**
 * 
 */

// 7.25 2교시 ================================

// 함수는 값으로 사용된다.
// == 그러므로 매개변수로 전달될 수 있다!!!

// 3. 인자 자리 a에 num 함수변수를 받고
var foo = function(a){
	console.log('foo1');
	a();			// 4. 인자가 함수면 함수를 실행한다
	console.log('foo2');
//	var sum = 0;
//	sum = x + y;
//	return sum;
	
};				//함수를 만들었다

//var num = 20;	//값을 만든다
//
//foo(num);		//함수를 호출한다 인자: num이라는 값


// 1. 함수 변수를 선언한다
var num = function(){
	console.log('num aaa');
};

// 2. foo 함수를 호출한다 인자로 num 함수변수를 던진다 
foo( num );		//실행하는 위치

// 그냥 그순간에 함수를 만들어 던지는 경우가 많다(windowAdaptor)
foo( function(){
	console.log('num bbb');
});


console.log('----------------');








// 함수는 값으로 사용된다.
// == 그러므로 함수가 반환값으로 사용될 수 있다

var foo1 = function(){
//	var f = 10;
	console.log('t1');
	var f = function(){	// function은 값이 되니까 얠 넣어서 return
		console.log('ffff');
	};
	console.log('t2');
	// 로직구현 ...
	
	return f;	// 함수를 return합니다~
};

var foo2 = foo1();	// 가운데 함수 f는 실행이 안된다(
					// 리턴값 f 받는 넘이없자너~

foo2();				// 리턴값을 받기때문에 ffff가 나오자너~

foo2 = foo1;	// ----- 다르다! -----

foo2();

//console.log('foo2: ' + foo2);

console.log('----------------');

var arr = [77, 88, 11, 44, 22];

//이렇게 return에 right와 left를 바꿔버리면 내림차순이된다dd
arr.sort(function(left, right){ return right - left; });
//문자와 문자의차이값을 이용해서 +냐 -냐 0이냐를 비교하여
//앞에걸 보내는지 뒤에걸 보내는지를 결정하여
//전체소트가 된다
//left right면 오름, right left면 내림(compareTo에서 볼수있따)
//공란이면 내부적으로 left right 가 되고 내가 재정의? 해서 던져주면
//나의 걸루다가 진행을 한다
//배열만들어서 selection bubble로 정렬하는대신
//이걸루다가 하면 손쉽게 할수있다
//단, 알아야 써먹을 수 있겠지?

//배열이나 객체 sort하기 어렵지 않겠네!
console.log('arr: ' + arr);
console.dir(arr);





