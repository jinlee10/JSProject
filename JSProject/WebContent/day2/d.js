/**
 * 
 */

// 7.25 3교시 ================================

//얘가 마치 프로토콜 같은거야. 많이 주고받고 한대
var car1 = {
		//속성(property)
		model: 'RollsRoyce Dawn',
		speed: 70,
		color: 'sky blue',
		//기능(function)
		brake: function(){
			if(speed > 0){
				this.speed -= 10;
			}
		},
		accel: function(){
			if(speed < 1){
				this.speed += 10;
			}
		}
};

//두개 만드는 게 아니라 car1을통해 원래 객체를 가르키는것이다
var car2 = car1;	

/////////////////// NOOOOOOOOOOOOOOOOOOOOOOOOOO ////////////////////






/////////// 자바스크립트에서도 class같은 구조를 생성해낼수있다
/////////// class는 없지만 new 생성자 할순있다 그래서 대소문자 구분
/////////// 해서 일반적인 함수 메소드는 소문자,
/////////// 클래스 만들고싶으면 앞글자를 대문자로 쓰도록 권장한다

function Car(model, speed, color){	//오잉 대문자? 그럼 너 클래스구나!
	this.model = model; //this 안붙이면 그냥 전역이나 진배없다
	this.speed = speed;
	this.color = color;
}

var car01 = new Car('RollsRoyce Dawn', 70, 'sky blue');	//함수지만 new때문에 객쳋럼됨
//car01.model = '쏘나타';	//있으면 접근, 없으면 추가

//console.log('Car.model: ' + model); //에러떨어짐. 존재조차 안 하니까
console.log('car01.model: ' + car01.model);
console.log('car01.speed: ' + car01.speed);
console.log('car01.color: ' + car01.color);

//var car01 = new car();	//이제서야 객체가 하나 만들어지는것이다
var car02 = new Car('Mulsan Speed', 190, 'red');
var car03 = new Car('부가티 베이론', 110, 'black');










