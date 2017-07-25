
public class Test {
	
	public Test(){
		int num1 = 10, num2 = 30;
		boolean flag = num1 > num2;
		
		String s1, s2;
		s1 = "JohnCena";
		s2 = "Kebob";	//String끼리는 대소비교는  안된다
		
		//객체 비교해서 같으면 0, 앞에가 작으면 -1, 뒤에가 작으면 1
		int num3 = s1.compareTo(s2);
		//차별값이 나온다. 이걸 이용해서 오름-내림차순 어쩌구 저쩌구 하는것.
		System.out.println("num3: " + num3);
		
		//모든 프로글매이 두개를 비교해서 작다 크다 같다를 갖고와서 sort를할수있게 해준다
		//(boolean이 아니라 문자와 문자사이의 차이값 숫자를 넘겨주고 그걸보며 누가 큰지작은지 알수잇는것
		//ㅇㅋ? 실제업무에서 함수를 전달하는일이 비일비재하다는것이다. 특히
		//node.js에서 바로나와버리기~
	}
	
	public static void main(String[] args){
		new Test();
	}
}
