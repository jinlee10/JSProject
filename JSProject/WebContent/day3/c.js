// --------------------------------------------------------------

document.write('야! 야야! 7/26 5교시야! array!');

// --------------------------------------------------------------

//js는 동적타입의 변수를 가진다 (하지만 타입 통일하도록!)
var arr = [1, 234, 234, 15, 53, 12, 34, 15, 2];
console.log(arr);

arr.sort(function(left, right){return right - left});	//내림차순
var brr = arr.slice(1, 3);

//메소드 체인
//var brr = arr.sort(function(left, right){return right - left}).slice(1, 3);
console.log(brr);


//arr.sort();
//arr.forEach(); 안에 함수너!

//var s = arr.join(' . ');	// join(): 문자열이되어 출력된다
			//default: cvs확장자(다 ,로 구분하는고)
//arr.reverse();	//로꾸거
//arr.push(10);			
//arr.push(235);
//arr.push(6);				//push(): arrayList의 add()
//arr.push(37);
//arr.push(1560);
//arr.push(347);
//
//arr.pop();					//맨뒤에꺼 없엔다
//arr.pop();


//console.log(arr);
//console.log(s);

//console.log(arr[0]);















 
 
// -----------------------
 
 








