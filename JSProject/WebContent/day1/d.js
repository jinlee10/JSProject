/*
*
*
*/

// ch4. 함수와 프로토타입 체이닝 

// 함수를 만들어보자.make

// 1) 함수 리터럴(함수 문자열)
function sum(x, y){				//함수의 선언, 함수의 생성
	var tot = x + y;
	return tot;
//	console.log('tot: ' + tot);
}

// ***{} 얘는 객체를 만들 수 있는 객체리터럴 new Object(); 생성자있다
// [] 얘는 array를 만드는 리터럴			 new Array();

//sum(3, 4);
var num = sum(3, 4);

console.log('num: ' + num);


// 2) 함수 표현식 (함수를 어떤 값에 대입하죠?)SSSsss =에 넣는대서 함수식이라구한다
var sum1 = function(x, y){ //함수 이름이 없어서 anonymous function 
	var tot = x + y;
	return tot;
}		//앞에있는 이름으로 호출할수있다

var sum2 = sum1;
var sum3 = sum2;

console.log(sum3(2, 4));

//

//이번주발표 이런거하는거야 객ㅊ체설계^^7

var obj = {						//객체리터럴로 객체만듦
		name : 'hello',	//json문자열
		sum1 : function(x, y){	//이렇게도 되겠네?
			return x + y;	//객체에 메소드 이렇게 만드는거구나!
		}
};	

var num = obj.sum1(77, 178);
console.log('함수도 값이래매? num값은: ' + num);

obj.name = 'hi';
//obj.sum = sum1;
//same as
obj.sum = function(x, y){ // O_O 함수식 자체를 object의 변수에 넣을수있따 
	var tot = x + y;
	return tot;
};

// FUNCTION IS VALUE!  함수도 값이야 값!!

// js에선 type이없다^.^ 매개변수도 변수 명만 있으면돼

//getter setter도 할수있겠지?, 디스는 나중에나옴


console.log('--------------');
// -===================== 7교시======================

// 다시한번 함수만들자~
// 1) 리터럴 먼저
function aaa(x, y, z){
	return x + y + z;
}

// 2) 함수 표현식
var aa = function(x, y, z){
	return x + y + z;
}

// 3) 대문자 F!  Function() 생성자를이용해 만든다 (잘안씀)
//	  해야할일을 single quotation안에 넣어줘라
var bb = new Function('x', 'y', 'z', 'return x + y + z;');
		   //F는 대문자죠?
var x = bb(2, 3, 4);

console.log('x: ' + x);

// -------------

// 함 수 도 객 체 다 !

function abc(x, y){
	return x + y;
}
abc.iname = '골-든 이글';	//property 들어가면 객체라는 소리죠?
console.log(abc);	//함수 어찌생겼는지 보여준담(실제적인 소스)
console.log(abc.iname);


//
var name1 = 'tacademy';
var obj1 = {	//객체만들자 (발표내용) + 생성자까지 넣어서
	name1: 'delete me',	//프로퍼티 : 밸류
//	doPrint : function(){	//값으로도 취급이 된다
//		var name1 = 'lolz';	//지역..변수...스코프...멤바..변수....
//		console.log(this.name1);	//멤바변수로 접근
//		
//	}
	doPrint : function(name1){	//값으로도 취급이 된다
		var name1 = 'lolz';	//지역..변수...스코프...멤바..변수....
		console.log('this.name1: ' + this.name1);	//멤바변수로 접근
		console.log('name1: ' + name1);
	}
};

console.log('obj1.name1: ' + obj1.name1);
console.log('obj1.doPrint: ' + obj1.doPrint);
obj1.doPrint('dfdf');

//this -> 자기 자신의 객체...라고 명시적으로 적어줘야한다(생략NO)
//객체에서 멤버프로퍼티에 접근하려고할떈 명시적으로 this써야한다


console.log('-------------');
//이름이 Data, properties: x, y가 있따. 메솓은 doSum
// sum of x, y
// 인자전달 안받는다 그냥합친다
// x, y값 할당 메소드와 얻어오는 메소드를 객체리터럴로 만들어라

var Data = {
	x : 0,		// json문자열로 만들땐 : 뒤에 반드시
	y : 0,		// 값이 있어야한다. 정 안되면 null이라두
	setX : function(x){
		this.x = x;
	},
	setY : function(y){
		this.y = y;
	},
	getX : function(){
		return this.x;	//this.을 해야 요 객체안에 있는 x에 접근ok
	},
	getY : function(){
		return this.y;
	},
	doSum : function(){
		return this.x + this.y;
	}
};

Data.setX(20);
Data.setY(30);
var tot = Data.doSum();

console.log('x: ' + Data.getX()
		+ ', y: ' + Data.getY() + ', tot: ' + tot);


// -----------------------------------------------------

// java도 class만들어서 new enw하면서 재활용하는거배웠지?
// js도 잇긴있어






