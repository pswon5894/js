// 버튼 0 누르면
// -버튼?에서 orange 클래스명 제거
// -버튼0에서 orange 클래스명 부착
// -박스?에 show 클래스명 제거
// -박스0에 show 클래스명 부착

// for (let i = 0; i< (tab-button).length; i++){
//     $('.tab-button').eq(i).on('click', function() {     //.eq(0) 첫번쨰것만 찾기
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     });
// }

// for (let i = 0; i< (tab-button).length; i++){
//     $('.tab-button').eq(i).on('click', function() {     //.eq(0) 첫번쨰것만 찾기
//         탭열기(i)
//     });
// }

$('.list').click(function(e){
     
    // if (e.target ==  document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    탭열기(e.target.dataset.id)
})

//이벤트 버블링으로 이벤트 리스너 줄일수 있다
function 탭열기(파라미터){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(파라미터).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(파라미터).addClass('show');
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