## 공부

js코드가 길고 복잡하다
html 조작문법을 쉽게 바꾸어주는 라이브러리들
jQuery, React, vue 등

$('셀렉터')로 찾으면 jQuery함수만 붙일 수 있음

querySelector('셀렉터')로 찾으면 자바스크립트 함수만 붙일 수 있음

one-way UI 애니메이션 만드는 법
1. 시작스타일
2. 최종스타일
3. 원할 때 최종스타일로 변하라고 코드 만듬
4. transition 추가

폼전송 막으려면
e.preventDefault()

## input, change 이벤트와 and, or 연산자

document.getElementById('email').addEventListener('input', funtion(){
    console.log('안녕')
})
//값을 입력할때 마다 작동

document.getElementById('email').addEventListener('change', funtion(){
    console.log('안녕')
})
//값을 입력하고 커서를 다른곳을 찍을 때 작동, change 이벤트는 <input>에 입력한 값이 바뀌고 포커스를 잃을 때 발생
//패스워드 자리수 알림 등 활용

true로 인식하는 자료들, truthy자료들
0제외 숫자
'문자'
[]
{}

false로 인식하는 자료, falsy 자료들
0
''
null
undefined
NaN

변수 쓰는 이유
1.길고 복잡한 자료들 저장
2.특정 값을 기억하게