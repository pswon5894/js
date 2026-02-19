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

자바스크립트 문법
if var finction

브라우저 문법
documnet.querySelector()
setTimeout()
alert()

includes() 로 문자검사가능
하지만,
a로 끝나냐, 한글 있는지?, 영어 있는지? 숫자 n회 출현? 이런건 못함

정규식 쓰면 문자검사 가능
정규식: 문자를 검사할 수 있는 식

정규식(정규 표현식, Regular Expression)은 특정한 규칙을 가진 문자열의 집합을 표현하는 형식 언어입니다. 복잡한 문자열 검색, 치환, 추출을 간결한 패턴으로 처리하며, 주로 이메일 주소나 전화번호 형식 검증 등 문자열 데이터 처리 및 유효성 검사에 필수적으로 사용

/e/ .test('abcde')
true, e문자 들어있는지

/[a-z]/.test('abc')
true, a에서z까지 중의 문자있는지? 문자 범위 지정 가능

/[A-Z]/.test('abc')
false, 대소문자 구분

/[ㄱ-ㅎ가-힣]/.test('ㅁ')
true, 한글 있는지? (모음검사는 나중에 추가하자)

/\S/.test('@$')
true, 아무런 문자 1개, 특수 기호도

/^a/.test('abbb')
true, a라는 문자로 시작하는지?

/^a/.test('sabbb')
false

/a$/.test('sssa')
true, 문자끝 검사

/a|b/.test('sssa')
a 또는 b 가 들어있는지? or 기호는 |

정규식으로 이메일 형식 검사
/[a-z]@[a-z]\.[a-z]/.test('a@b.c')      //true
/[a-z]+@[a-z]+\.[a-z]+/.test('ass@bss.css')     //true


/\S@\S\.\S/.test('aaa@bbb.ccc')     //false
/\S@\S\.\S/.test('a@b.c')       //true


/\S+@\S+\.\S+/.test('aaa@bbb.ccc')      //true
모든문자+@모든문자+.모든문자+

/a+/.test('aaa@bbb.ccc')        //true
+는 왼쪽문자 반복검색

캐러셀 - 슬라이드되는 여러 이미지 ui
응용 메뉴에도 슬라이드 ui 응용 가능

one-way 애니메이션 들어있는 ui 만들기
1. 시작화면
2. 최종화면
3. 원할 떄 최종화면으로 변하게 js
4. transition:all 1s; 추가


magrin-left: -100vw;
transform: translateX(-100vw);
<!-- margin-left 보다 부드러움 -->


magrin-left: -100vw;

렌더링 영향
레이아웃 단계에 영향을 줌-> 요소의 위치가 바뀌면 주변 요소 배치까지 다시 계산해야 함(리플로우 발생)

성능 특성
cpu 연산이 많아지고 애니메이션 시 끊김 가능


transform: translateX(-100vw);

렌더링 영향
레이아웃에 영향을 주지 않고, 컴포지팅(compositing) 단계에서 GPU가 처리

성능 특성
하드웨어 가속 덕분에 부드럽고 높은 FPS 유지

브라우저 렌더링 과정
웹 브라우저는 화면을 3단계로 그림

1. 레이아웃(Layout, Reflow)
- DOM 요소들의 크기와 위치를 계산하는 단계.
- 예: margin-left, width, height 같은 속성이 바뀌면 전체 문서 흐름에 영향을 줌
- 상위 요소가 바뀌면 하위 요소까지 모두 다시 계산해서 비용이 큼

2. 페인트(Paint, Repaint)
- 요소의 색상, 배경, 테두리 등 시각적 스타일을 다시 그리는 단계
- 레이아웃에는 영향을 주지 않지만 화면에 보이는 모습이 바뀌면 발생

3. 컴포지팅(Compositing)
- GPU가 레이어를 합성해서 최종 화면을 그림
- transform, opacity 같은 속성은 레이아웃을 건드리지 않고 이 단계에서만 처리