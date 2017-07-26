
// --------------------------------------------------------------

document.write('야! 야야! 7/26 4교시야! 예외처리 한다!');

// --------------------------------------------------------------

//얘두  try catch잇죠?

function foo(){
//	var num = 10;
	num = 10;
	console.log('a');
	console.log('b');
	console.log('c');
}


function bar(){					
	try{
		console.log('num: ' + num);
		console.log('정상실행');
	}catch(e){
		console.log('오류발생: ' + e.message);
	}
	console.log('hi hello world');	//우에서 에러나면 멈춰서 여기 동작 X
}

foo();		//얘 해도 에러뜸
bar();		//얘먼저 하면 404 Not Found에러뜸

// {}안의 영역은 별도의 실행공간으로 잡아서
// 한 function안에 var num 하면 로컬이라서 다른함수에서 못찍어본다는뜻

// 함수안에서 그냥 num = 10하면 전역으로써 그줄에 왔을때 메모리에 등재된다
// 그러니까 함수안에서만 쓰이는변수 쓰고싶으면 var num = 10 이렇게해라

// ------
console.log('------------------------------');



var arr = [7, 5, 8, 1, 4];
//arr.sort();
//console.log('arr: ' + arr);

// ----- forEach -----
// ForEach(func) {}

//forEach();
//arr.forEach(function(num)){
//	console.log('ab function: ' + ' ');
//}



function ab(num){
	console.log('ab function : ' + num);
}

for(i = 0; i < arr.length; i++){
	ab(arr[i]);
}

function aaa(){
	var num = 30;
	console.log('num: '+ nim )
}

// JS의 배열은 collection이라고 봐라!
console.log(arr);

			

// 
 var num1 = '100 MOOMIN123.999';		
 var num2 = '200.234';
 
 var num3 = parseInt(num1) + parseInt(num2);
// var num3 = num1 + num2; //drops 소숫점이하) 
 // 정확히 말하면 숫자만 오다가 숫자이후로 버려버리는것
 //자매품: parseFloat
 
 console.log(num3);
 
 
var str = '3 * 2 + 6';	//수식갖는 문자열
//콘솔용,,,

 
console.log(str);
console.log(eval(str));	//진짜루 저위에 스트링 더하기를 해저는 꿀-잼


var su1 = '34';
var opt ='+';
var su2 = '21';

var su3 = eval(su1 + opt + su2);	//오우랴 계산기 만달기 참 쉽네
console.log(su3);


var su4 = 4;
var su5;

var su6 = su4 / su5;	//Java선 ArithmeticException이니까 여기선..){
//if(isFinite(s6)){
//	console.log('finite! su6은 무한대');
//}else{
//	console.log(su6);
//}

 var su6 = su4 / su5;
 if( isNaN ){
	 console.log('su6: ' + su6);
 }else{
	console.log('su6 is NaN!'); 
 }
 
 
// -----------------------
 
 








