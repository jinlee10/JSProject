/*
*
*
*/

// ============ HW 170724 =========================

// 1.  JS로 구구단 출력하기!
var num1 = 0;
var num2 = 0;
for(i = 0; i < 9; i++){
	num1 = i + 1;
	console.log('');
	for(j = 0; j < 9; j++){
		num2 = j + 1;
		console.log(num1 + ' * ' + num2 + ' = ' + num1 * num2);
	}
}

console.log('----------------------------');

/*
 * 2. 학생 정보 관리 객체를 만들고, 이를 배열로 5명 생성하여
   그 목록을 console 모드에 출력하라
   (학번, 이름, 나이, 국어점수, 영어점수, 수학점수,
    총점, 평균, 등급 프로퍼티와 합을 구하는 메소드,
    평균을 구하는 메소드, 등급을 구하는 메소드,
    전체 정보를 출력하는 메소드 포함)
 */

var student = {
	id : '',	name : '',	age : 0,	kor : 0,	
	eng : 0,	math : 0,	tot : 0,	avg : 0,	grade : '',
	//getter setter
	getId : function(){return this.id;},
	getName : function(){return this.name;},
	getAge : function(){return this.age;},
	getKor : function(){return this.kor;},
	getEng : function() {return this.eng;},
	getMath : function(){return this.math;},
	getTot : function(){this.findSum(); return this.tot;},
	getAvg : function(){this.findAvg(); return this.avg;},
	getGrade : function(){this.findGrade(); return this.grade},
	setId : function(id1){this.id = id1;},
	setName : function(name1){this.name = name1;},
	setAge : function(age1){this.age = age1;},
	setKor : function(kor1) {this.kor = kor1;},
	setEng : function(eng1){this.eng = eng1;},
	setMath : function(math1){this.math = math1;},
	findSum : function(){
		this.tot = this.kor + this.eng + this.math;
	},
	findAvg : function(){
		this.avg = Math.floor(this.tot / 3);
	},
	findGrade : function(){
		switch(Math.floor(this.avg / 10)){
		case 10: case 9:
			this.grade = 'A';
			break;
		case 8:
			this.grade = 'B';
			break;
		case 7:
			this.grade = 'C';
			break;
		case 6:
			this.grade = 'D';
			break;
		default:
			this.grade = 'F';
			break;
		}
	},
	showAllInfo : function(){
		console.log('학번: ' + this.getId() + '\t이름: ' + this.getName()
				+ '\t나이: ' + this.getAge());
		console.log('국어: ' + this.getKor() + ', 영어: ' + this.getEng()
				+ ', 수학: ' + this.getMath()
				+ ' 총점: ' + this.getTot() + ', 평균: ' + this.getAvg()
				+ ', 성적: ' + this.getGrade());
	}
};

var std = new Array(5);

std[0] = student;
std[0].setId('12340001');
std[0].setName('John Cena');
std[0].setAge(42);
std[0].setKor(100);
std[0].setEng(90);
std[0].setMath(88);
std[0].showAllInfo();

std[1] = student;
std[1].setId('12340002');
std[1].setName('Bob Ross');
std[1].setAge(67);
std[1].setKor(99);
std[1].setEng(99);
std[1].setMath(99);
std[1].showAllInfo();

std[2] = student;
std[2].setId('12340003');
std[2].setName('톰 크루즈');
std[2].setAge(59);
std[2].setKor(64);
std[2].setEng(47);
std[2].setMath(70);
std[2].showAllInfo();

std[3] = student;
std[3].setId('12340004');
std[3].setName('도날드 트럼프');
std[3].setAge(16);
std[3].setKor(55);
std[3].setEng(81);
std[3].setMath(45);
std[3].showAllInfo();

std[4] = student;
std[4].setId('12340005');
std[4].setName('버락 오바마');
std[4].setAge(64);
std[4].setKor(88);
std[4].setEng(77);
std[4].setMath(91);
std[4].showAllInfo();


console.log('----------------------------');

