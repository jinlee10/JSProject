/*
*
*
*/

// ============ HW2 170724 =========================

// 제어문연습

// 1. 인치를 입력받아 cm 를 구하시요 
var inch = 33;
var convertToCm = function(ch){
	cm = Math.floor(inch * 2.54);
	return '1. ' + inch + '인치는 ' + cm + '인치입니다.';
};

var val = convertToCm(inch);
console.log(val);

// 2. 원과 환률(%)을 입력받아 달러를 구하시요

var won = 1342000;
var rate = 0.000897;	// 20170724일자 따끈따끈한 환율

var convertToDollars = function(x, y){
	dollar = Math.floor(x * y);
	return dollar;
};

var val2 = convertToDollars(won, rate);
console.log('2. ' + won + '원은 미화 ' + val2 + '달러 입니다');

// 3. 반지름과 높이를 입력받아 원뿔의 부피를 구하시오

var radius = 4;
var height = 9;

var findVolumeOfCone = function(r, h){
	res = Math.floor((1 / 3) * 3.14 * r * r * h);
	return res;
};

var vol = findVolumeOfCone(radius, height);
console.log('3. 높이: ' + height + ', 반지름: ' + radius + ', 부피: ' + vol);


// 4. 섭씨를 입력받아 화씨를 구하시요

var degreeCelsius = 32;

function convertToFahrenheit(celsius){
	fah = celsius * 9 / 5 + 32;
	return fah;
}

var fahrenheit = convertToFahrenheit(degreeCelsius);
console.log('4. 섭씨 ' + degreeCelsius + '는 화씨로 ' + fahrenheit + '도 입니다.');


// 5. 월급과 세금(%)을 입력받아 실수령액을 구하시오

var income = 2700000;
var taxRate = 0.17;

var calcNetIncome = function(inc, tRate){
	value = inc - inc * tRate;
	return value;
};

var netIncome = calcNetIncome(income, taxRate);
console.log('5. 월급: ' + income + ', 세율: ' + taxRate + '실수령액: ' + netIncome);


// 6. 마일을 입력받아 km을 구하시오

var miles = 8.7;

var calcToKm = function(m){
	km = m * 1.61;
	return km;
};

var kilo = calcToKm(miles);
console.log('6. ' + miles + '마일은 ' + kilo + '킬로미터 입니다.');

// 7. 가로, 세로, 높이를 입력받아 사각기둥의 부피를 구하시오

var width = 5;
var depth = 7;
var height = 9;

var calcCubeVolume = function(w, d, h){
	return w * d * h;
};

var val = calcCubeVolume(width, depth, height);
console.log('7. 가로: ' + width + ', 세로: ' + depth + ', 높이: ' + height
		+ ', 부피: ' + val);


// 8. 세 수를 설정하고 그중 가장 작은 수를 출력하시오

var num1 = 10;
var num2 = 17;
var num3 = 22;

var findMin = function(n1, n2, n3){
	if(n1 < n2){		// n1 < n2
		if(n1 < n3){	// n1 < n3
			return n1;
		}else{			// n3 < n1 || n3 < n1
			return n3;
		}
	}else{				// n2 < n1
		if(n2 < n3){	// n2( < n1) < n3
			return n2;
		}else{			// n3 < n2( < n1)
			return n3;
		}
	}
};


var min = findMin(num1, num2, num3);
console.log('8. 수1: ' + num1 + ', 수2: ' + num2 + ', 수3: '
		+ num3 + ', 가장 작은 수: ' + min);


// 9. 점수 설정하고 수,우,미,양,가 출력

var score = 88;
var grade = '';

function findGrade(score){
	switch(Math.floor(score / 10)){
	case 10: case 9:
		grade = '수';
		break;
	case 8:
		grade = '우';
		break;
	case 7:
		grade = '미';
		break;
	case 6:
		grade = '양';
		break;
	default:
		grade = '가';
		break;
	}
	return grade;
}

grade = findGrade(score);
console.log('9. 점수: ' + score + ', 등급: ' + grade);

