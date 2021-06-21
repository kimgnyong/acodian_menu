;(function($){

    var popol = {
        init: function(){            
            this.section6Fn();
        },
        section6Fn:function(){
            var $slideBtn = $('#section6 .row234 > a');
            var $slideWrap = $('#section6 .slide-down-gap');
            var iven1       = null;
            var iven2       = null;
            var $spanMoveWrap =  $('#section6 .text-wrap');
            var $spanBar      =  $('#section6 .span-bar');
            var $subArr1      =  $('#section6 .arr1');
            var $subArr2      =  $('#section6 .arr2');

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })

            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);

            }

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })
                        
//아코디언 메뉴 알고리즘
//초기 설정
//1. 버튼모양이 - 표기 되어한다. 이벤트는 addClass('addSlideDown');
//2. 첫번째 아코디언 서브메뉴가 펼쳐있다. 이벤트는 slideDown('')
var $clickBtn = $('.click-wrap'); //버튼 
var $slideSub = $('.slide-down-gap'); //서브메뉴

$clickBtn.eq(0).addClass('addSlideDown'); //-
$clickBtn.eq(0).next().stop().slideDown(300);

//아코디언 메뉴 버튼 클릭 이벤트
//문제점 모든 클래스를 삭제하면서 
//클릭한 자신의 버튼에도 삭제가되어서 
//다시 토글글래스가 동작 - 버그
//그래서 자신의 버튼임을 판단 그게 
//클래스가 유무 판단하고 실행 addSlideDown
//hasClass('클래스이름만') 
//클래스가 있다면 true
//클래스가 없다면 false

$clickBtn.each(function(idx){
    $(this).on({
        click:  function(e){
            e.preventDefault();
            console.log( idx + '번 버튼 클래스 ' +  $clickBtn.eq(idx).hasClass('addSlideDown') )  
            //false 인경우는  아래모두 수행                   
            if( $clickBtn.eq(idx).hasClass('addSlideDown') == false ){
                $clickBtn.removeClass('addSlideDown'); //나머지 모든 버튼
                $slideSub.stop().slideUp(300);  //나머지 모든 서브메뉴               
                $(this).toggleClass('addSlideDown'); //- +
                $(this).next().stop().slideToggle(300);                                
            }
            else{
                //true 인경우는  아래만 수행                   
                $(this).toggleClass('addSlideDown'); //- +
                $(this).next().stop().slideToggle(300);
            }  
        }
    });                
});

        },
       
    }


    popol.init();

})(jQuery);

