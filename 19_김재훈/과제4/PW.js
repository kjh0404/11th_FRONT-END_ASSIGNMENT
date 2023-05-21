
const password = prompt("비밀먼호를 입력하세요")
if(password.length < 6 || password.includes(" ")){
    alert("비밀번호가 너무 짧거나 공백이 있습니다.")
}else{
    alert("좋은 비밀번호 입니다.")
    window.location = 'file:///C:/Users/Jjsss1/Desktop/%EA%B5%AC%EA%B5%AC%EB%8B%A8.html';
}
