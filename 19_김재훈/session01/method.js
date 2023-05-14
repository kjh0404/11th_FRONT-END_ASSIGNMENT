//string
String.length //문자열의 길이를 알려주는 메소드
//ex
let String="abcdefgh";
console.log(String.length); // 콘솔창에 8 나타남.
// indexOf
console.log(String.indexOf("b")); //문자의 index 위치를 알려주는 메소드
//includes
String.includes("a") //문자열 안에 "a"가 포함돼 있으면 불리언 값 True를 반환
//split
console.log(String.split("")) //공백으로 문자를 구분하여 배열로 반환한다. ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//subsstring
String.substring(1,4); //첫번째 인수부터 두번째 인수 전까지의 문자를 반환 'bcd'
String.substring(4,1); //첫번째 인수가 두번째 인수보다 크면 아규먼트의 순서를 맞추기 위해 자동으로 교환 'bcd'
String.substring(4);   //두번째 인수가 생략된 경우는 입력된 인수부터 문자열의 끝까지 반환 'efgh'
//toUpperCase()
String.toUpperCase() //문자열을 대문자로 변환
//toLowerCase() //문자열을 소문자로 변환

//number
Number(true); //인수를 숫자로 변환 1
Number(false) // 0
Number("10") //10
parseInt("10") //문자열에 포함된 숫자를 정수로 변환 10
parseInt("-10") //-10

//Math
Math.floor(10.1234) //가장 가까운 숫자로 내림 10
Math.round(10.6) //소숫점 첫째자리에서 반올림 11
Math.ceil(10.01) //가장 가까운 정수로 올림 11
Math.random() //0~1사이의 수를 무작위로 반환 
Math.max(10,20,30,40,50) //인수중에서 가장 큰수를 반환 50
Math.min(10,20,30,40,50) //인수중 가장 작은 수를 반환 10

