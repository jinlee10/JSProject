/*
*
*
*/

// 배열: 여러개를 하나의 이름으로 관리

var arr = ['시원스쿨', '해커스톡', '야나두'];	//이렇게 한대	//앞에 대괄호 없네!

console.log('arr: ' + arr);
console.log('arr.length: ' + arr.length);
console.log('arr[0]: ' + arr[0]);
console.log('arr[3]: ' + arr[3]);
console.log('arr[2]: ' + arr[2]);

console.log('arr.length: ' + arr.length);

arr.length = 10;//자바선 렝스가 읽기전용속성이었을것이야

console.log('arr.length: ' + arr.length);

console.log('arr[3]: ' + arr[3]);
console.log('arr[9]: ' + arr[9]);

arr[20] = '마초마초맨';
console.log('arr[20]: ' + arr[20]);
console.log('arr.length: ' + arr.length);



//undefined끼리 연산해볼까?


var brr = [2, 3];
var num = brr[0] + brr[1];

console.log("num: " + num);

brr.length = 10;

num = brr[0] + brr[8];
console.log("num: " + num);

num = brr[0] + '에듀윌';
console.log("num: " + num);


//배열도 객체입니다
// {}
var crr = ['a', 'b', 'c'];

for(name in crr){
	console.log(name + ": " + crr[name]);
}

//console.log('' + );
crr.push('d');
for(var i = 0; i < crr.length; i++){
	console.log(name + ": " + crr[name]);
}

var drr = new Array(5, 5, 5, 5);	//다섯개가만들어진다 //

console.log(drr.length);
console.log(drr);


// =========== 5교시 ===========

// JS의 2차원배열 만들기 1) 리터럴 상수
var frr = [[2,3,4], [5,6,7,8]];

console.log('frr.length: ' + frr.length);
console.log('frr[0].length: ' + frr[0].length);
console.log('frr[1].length: ' + frr[1].length);

//frr배열의 전체 합을 구하여 출력하라
var sum = 0;
for(var i = 0; i < frr.length; i++){
	for(var j = 0; j < frr[i].length; j++){
		sum += frr[i][j];
	}
}

console.log('배열 frr의 합 sum: ' + sum)

// JS의 2차원배열 만들기 2) new array
var grr = new Array(3);
arr[0] = new Array(5);
arr[1] = new Array(5);		//다~~~ undefined로 init되죠?
arr[2] = new Array(5);

console.log('type of grr: ' + typeof grr);
console.log('type of grr: ' + typeof(grr));

var hrr = [1, 't', true, {}];
console.log('----------');
console.log('type of hrr: ' + typeof(hrr));
console.log('type of hrr: ' + typeof(hrr[0]));
console.log('type of hrr: ' + typeof(hrr[1]));
console.log('type of hrr: ' + typeof(hrr[2]));
console.log('type of hrr: ' + typeof(hrr[3]));

function aaa(){
	return 'a';
}	

//함수의 이름을 써야 함수 자체의 타입을 알수있다
console.log('type of aaa(): ' + typeof aaa); 
console.log('type of return type of aaa(): ' 
		+ typeof aaa()); //이건 리턴값에 대한 type 


// =======================================================
// 제어문 연습
var month = 4;
//월의 마지막 날을 구해서 출력하라
var lastday = 0;
switch(month){
case 1: case 3: case 5: case 7:
case 8: case 10: case 12:
	lastday = 31;
	break;
case 4: case 6: case 9: case 11:
	lastday = 30;
	break;
case 2:
	lastday = 28;
	break;
default:
	lastday = '몰러이눔아';
	break;
}

console.log(month + '월의 마지막 날은: ' + lastday);

var score = 99;

// 점수에 따른 수우미양가 구하기
var gradeMark = '얍';
console.log(Math.floor(score/10));

switch(Math.floor(score/10)){	//Math => in java, 기본객체 / in JS: 내장객체
case 10: case 9:
	gradeMark = '수';
	break;
case 8:
	gradeMark = '우';
	break;
case 7:
	gradeMark = '미';
	break;
case 6:
	gradeMark = '양';
	break;
default:
	gradeMark = '가';
	break;
}

console.log('당신의 점수는: ' + gradeMark);



var num = 100;
// case로 비교하는데....dd

switch(num){ //num과 case를 ===로 비교(==아니라 type-strict하게)
case 4.3:
	console.log('와~ js에선 실수 switch도 되네?');
	break;
case 'hallo':
	console.log('와~ js에선 string switch도 되네?');
	break;
case false:
	console.log('와~ js에선 boolean switch도 되네?');
	break;
case '100':
	console.log('와~ js에선 type달라도 비교가 되네?'); // 얘만 안됨
	break;
}