// 버튼 0 누르면
// -버튼?에서 orange 클래스명 제거
// -버튼0에서 orange 클래스명 부착
// -박스?에 show 클래스명 제거
// -박스0에 show 클래스명 부착

for (let i = 0; i< (tab-button).length; i++){
    $('.tab-button').eq(i).on('click', function() {     //.eq(0) 첫번쨰것만 찾기
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}


// 자주쓰는 셀렉터 변수에 넣어쓰기, 성능 개선
var 버튼 = $('.tab-button');

// 버튼.eq(1).on('click', function() {     //.eq(0) 첫번쨰것만 찾기
//     버튼.removeClass('orange');
//     버튼.eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// 버튼.eq(2).on('click', function() {     //.eq(0) 첫번쨰것만 찾기
//     버튼.removeClass('orange');
//     버튼.eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });