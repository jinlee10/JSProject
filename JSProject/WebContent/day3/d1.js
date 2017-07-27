// --------------------------------------------------------------

document.write('야! 야야! 7/27 3교시야! ');

// --------------------------------------------------------------


//////// WHAT IF... 여러줄 출력?
var str = 'John\nCENAAAAAAAAAAAAAAAAAAAAAAAA\nU CANT C ME';

var str1 = `John
	CENAAAAAAA			 
	U CANT C ME`;	//// \n \n 안하고 엔터치면 됐으면 좋겠어:
		// =====> grace accent(백틱 `)으로 하면 된대
		// ECMA 5부터 추가(js5)

console.log(str);

var str2 =		// indent도 인식하므로 빼줘라as
`ARE YOU READY KIDS??
AYE AYE CAPTAIN!
I CAN'T HEAR YOU!!!
AYE! AYE! CAP! TAIN!!!
OOO HOOOEEWWAAA
WHO LEAEVS IN THE PINEAPPLE UNDER THE SEA?
SPONGEBOB SQUAREPANTS!`
;

console.log(str2);


// -=-=-=-=-=-=

var name = '고길동';
var age = 39;
var address = '서울메트로';

//일므: 홍길동 나이: 30 주소: 설 출력하고싶으면?

//console.log('이름: ' + name + '  나이: ' + age
//		+ '  주소: ' + saddress);

// 백틱 이용하여 `` 하고 그안에 
console.log(`이름: ${name} 나이: ${age} 주소: ${address})`);
// =======> toString()할떄 편하곘제? 플러스(+)노가다
// 안해도 되자너~



function func(f){
	console.log('f1');
	f();		//이거 되죠
	console.log('f2');
}


func(()=>{ //this func의 actual 내용은 as next
	console.log('dfdfdf');
}
		);

// ㅍ이치
var arr = [];
arr.push(6);	//array의 push method
arr.push(3);
arr.push(236);
arr.push(97);
arr.push(1);


//배열전체 출력 

arr.forEach((v)=> {//갯수만큼 반복ㅎ면서 출력
	arr.forEach(function(v)){//yn
		
	
	console.log(v);
	}
}


// => : 함수 축약식(안드선 람다)

multi = function(x, y){
		return x * y;
	}

	
multi = (x, y) => return x * y; //심플문. {}생략ok
//샐행되는값ㅇ이있으먄옌[길;탄헤즌디
//집어넣자
mlti = (x, y) => x * y;




//함수 초기값 설정하기
function add(a, b){
	return a + b;
}
console.log(add()); //a,b랑 무관하게 args가있지?
//그게배열로받아지지?//둘다 undefined지?
//실행시 NaN리턴되지?

//함수 초기화값


console.log(add(a,b = 0)); //아무도 선택 안하면
						//얘가 대신 설정한대 3

console.log();
console.log(add());
console.log(add(3));
console.log(add(3,5));


//1. 함수 출력(${})
//2. 함수 축약( => )
//3. 함수 초기화값














