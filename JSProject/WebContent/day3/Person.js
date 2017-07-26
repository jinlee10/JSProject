
// --------------------------------------------------------------

document.write('야! 야야! 7/26 객체지향 배운다 이말이야!');
// Person Class라고 보아도 진배없다

// --------------------------------------------------------------

//function Person(name){
////	name = name //전역으로 빠져나간다
//	this.name = name;	//객체안에 프로퍼티가 저장됨과 동시에 name이 저장됨
//	
//}
function Person(name, age){ //인자 제일 많은거 하나만 놓으면 되는거였다
	if(name === undefined){
		this.name = '아무이름'
	}else{
		this.name = name;	//객체안에 프로퍼티가 저장됨과 동시에 name이 저장됨
	}
//	name = name //전역으로 빠져나간다
//	this.age = age;	//오~버로~딩~
	if(age === undefined){
		this.age = 100;
	}else{
		this.age = age;
	}
}

Person.prototype.getName = function(){return this.name;}
Person.prototype.setName = function(name){this.name = name;}
Person.prototype.toString = function(){
	return 'name: ' + this.name +
			', age: ' + this.age;
	}

Person.prototype.getAge = function(){return this.age;}
Person.prototype.setAge = function(){this.age = 3;}




























