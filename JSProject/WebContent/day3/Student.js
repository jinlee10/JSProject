/**
 * 
 */


//Student가 Person을 상속받는거한다잉 // 2교시 //
//function Student(hakbun){
//	this.hakbun = hakbun;
//}
//
//function Student(name, age){		//constructor overloading
//	Person.call(this, name, age);	//person아란 클을 잔댈해
////	this.name = name;
//}

function Student(name, age, hakbun){		//constructor overloading
	Person.call(this, name, age);	//person을 call하면 상속되서 값에 접근ok
//	this.name = name;
	this.hakbun = hakbun;
}

//상속할거면 prototype맨위에다가 써야된다
//내가 추가하고자하는 함수들 우에다가^^7
Student.prototype = new Person(); //student의 프로토타입을 바꾸는것이다

//얘넨 단순한 추가(extension)
Student.prototype.setHakbun =  function(){this.hakbun = hakbun;}
Student.prototype.getHakbun = function(){return '학번 : ' + this.hakbun;}

Student.prototype.toString = function(){
	return '학번: ' + this.hakbun + ' ' + this.name  + ' ' + this.age;
}































