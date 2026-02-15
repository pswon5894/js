변경내용 timer -> setInterval
clearInterval(timer); // 반복 종료, 불필요한 인터벌 반복 종료
clearInterval(setInterval); // 반복 종료, 불필요한 인터벌 반복 종료

<script>
    var count = 5
    setInterval(function(){
        if(count >0){
            count -= 1;
            document.querySelector('.num').innerHTML = count;
        } else{
            clearInterval(setInterval); // 잘못된 사용 !!
            document.querySelector('.alert').style.display='none';
        }
    }, 1000);
</script>

# 문제점
- setInterval(...)의 반환값(인터벌 ID)을 변수에 저장 안함
- clearInterval(setInterval)은 잘못된 사용
-> setInterval은 함수 자체, 실행된 인터벌 ID가 아님
- 따라서 인터벌을 멈출 수 없고, 에러가 발생.


아니면 var timer = setInterval
timer 변수 선언
```js
<div class="alert alert-danger">
    <span class="num">5</span>초 이내 구매시 사은품 증정!
</div>

<script>
    let count = 5;
    // setInterval의 반환값을 timer에 저장
    const timer = setInterval(() => {
        if (count > 0) {
            count -= 1;
            document.querySelector('.num').innerHTML = count;
            // $('.num').text(count); // js쿼리셀렉터 vs j쿼리
        } else {
            clearInterval(timer); // 반복 종료
            document.querySelector('.alert').style.display = 'none';
            // $('.alert').hide();
        }
    }, 1000);
</script>

```

1. 기본 함수 표현식
setInterval(function() {
    console.log("실행!");
}, 1000);

- 전통적인 함수 선언 방식
- function 키워드를 사용
- 내부에서 this를 사용하면, 호출 방식에 따라 this가 달라질 수 있습니다. (예: DOM 이벤트 핸들러에서는 해당 요소를 가리킴)


2. 화살표 함수 표현식
setInterval(() => {
    console.log("실행!");
}, 1000);

- ES6에서 도입된 간결한 함수 표현식
- function 대신 =>를 사용
- this를 새로 바인딩하지 않고, 상위 스코프의 this를 그대로 사용
→ 그래서 클래스나 객체 안에서 메서드 작성 시, this 혼동을 줄일 수 있음
- 코드가 짧고 직관적이라 반복 실행 같은 간단한 콜백 함수에 자주 쓰임

예제 1: 일반 함수 사용
<script>
    function Counter() {
        this.count = 0;
        setInterval(function() {
            this.count++; 
            console.log("function:", this.count);
        }, 1000);
    }

    new Counter();
</script>
결과
- function 키워드로 만든 콜백은 자신만의 this를 바인딩
- setInterval 내부에서 this는 window(브라우저 환경) 또는 global(Node.js 환경)을 지목
- 따라서 this.count는 Counter 객체가 아니라 전역 객체에 접근하려고 해서 NaN 또는 에러 발생


예제 2: 화살표 함수 사용

<script>
    function Counter() {
        this.count = 0;
        setInterval(() => {
            this.count++; 
            console.log("arrow:", this.count);
        }, 1000);
    }

    new Counter();
</script>

결과
- 화살표 함수는 자신만의 this를 만들지 않고, 상위 스코프의 this를 그대로 사용
- 여기서는 Counter 생성자 함수의 this(즉, 새로 만든 객체)를 유지
- 따라서 this.count가 정상적으로 증가하며 1, 2, 3... 출력


this를 특정 객체로 바인딩해야 하는 경우라면 전통적인 function을 쓰는 게 더 적합.

화살표 함수와 function을 썼을 때 this가 어떻게 달라지는지 예제 코드

예제 1: 일반 함수 사용

<script>
    function Counter() {
        this.count = 0;
        setInterval(function() {
            this.count++; 
            console.log("function:", this.count);
        }, 1000);
    }

    new Counter();
</script>

출력
count: 0[[Prototype]]: Object
15VM159:5 function: NaN

결과
- function 키워드로 만든 콜백은 자신만의 this를 바인딩
- setInterval 내부에서 this는 window(브라우저 환경) 또는 global(Node.js 환경)을 가리킵니다.
- 따라서 this.count는 Counter 객체가 아니라 전역 객체에 접근하려고 해서 NaN 또는 에러가 발생

호출 컨텍스트(실행 컨텍스트, Execution Context)는 자바스크립트에서 코드가 실행되는 환경(스코프, 변수, this 등)을 구조화한 객체


예제 2: 화살표 함수 사용
<script>
    function Counter() {
        this.count = 0;
        setInterval(() => {
            this.count++; 
            console.log("arrow:", this.count);
        }, 1000);
    }

    new Counter();
</script>

결과
- 화살표 함수는 자신만의 this를 만들지 않고, 상위 스코프의 this를 그대로 사용
- 여기서는 Counter 생성자 함수의 this(즉, 새로 만든 객체)를 유지
- 따라서 this.count가 증가하며 1, 2, 3... 출력


두 코드에서 this를 사용하지 않고 단순히 count라는 변수만 증가시키는 경우라면, function과 화살표 함수(=>) 사이에 실질적인 차이는 없음

이유
- 화살표 함수의 가장 큰 특징은 자신만의 this를 바인딩하지 않고, 상위 스코프의 this를 그대로 사용한다는 점
- 그런데 코드에서 this를 전혀 쓰지 않고, 그냥 count라는 변수를 다루고 있다면 this 바인딩 차이 없음
- 따라서 두 방식 모두 동일하게 동작
