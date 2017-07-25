/**
 * 
 */

// 7.25 6교시 ================================


var a = 10;					//window.a 프로퍼티가 추가된것이다
//var obj = {};
//obj.a = 20;


function foo(){
//	var a = 20;
//	a = 20;
	this.a = 20;	//함수 안에서 this는 밖의 global 객체를 가르킨다
}

foo();
console.log('a: ' + a);					// 둘은
console.log('window.a: ' + window.a);	// 같다
console.log('this.a: ' + this.a);		// 얘도	//this == window



console.log('-------------------------');

var value = 100;	//this에 value property 추가시킨건(전-역)

/*var obj = {	//중괄호 여닫으면 객체!
		value: 1,
		func1: function(){
			this.value += 1; //여기 this는 그 자체
			console.log('func1 value: ' + this.value);
			func2 = function(){
				this.value += 1; 
				console.log('func2 value: ' + this.value);
				func3 = function(){
					this.value += 1;
					console.log('func3 value: ' + this.vaule);
				}
				func3();
			}
			func2();
		}
}

obj.func1();*/

var obj = {	//중괄호 여닫으면 객체!
		value: 1,
		func1: function(){	//이너
			this.value += 1; //여기 this는 그 자체
			myThis = this;
			console.log('func1 value: ' + this.value);
			func2 = function(){	//이너
				myThis.value += 1; 
				console.log('func2 value: ' + myThis.value);
				func3 = function(){
					myThis.value += 1;
					console.log('func3 value: ' + myThis.vaule);
				}
				func3();
			}
			func2();
		}
}

obj.func1();








// dfsdf





