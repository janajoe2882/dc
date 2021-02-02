;(function($){
    $(function(){
        $(".slider").bxSlider({
            auto:true, mode:'fade', nextText:'', prevText:''
        });

        var menu = $("#gnb > ul").clone(); //대상을 복제하는 함수
        $("#main_menu").append(menu); //복제된 내용을 대상(#main_menu)에 집어넣음
        $("#main_menu a").addClass("arrow"); //본문 html태그가 없으므로 클래스를 넣어줘야 함

        var sns = $(".sns").clone();
        $("footer").prepend(sns);

        $(".menu_btn").click(function(e){
            e.preventDefault(); //태그가 가진 원래 기능이 동작하지 않도록 함

            var target=$(this).attr("href"); //.menu_btn 안에 있는 href값 추출
            var top = $(target).offset().top;

            /*
                .animate({css스타일},동작시간);
                    :대상에 {스타일}을  
                .offset().top : 대상이 문서의 위에서부터 떨어진 위치
                .offset().left : 대상이 문서의 맨왼쪽에서부터 떨어진 위치
            */

            $("html, body").animate({scrollTop:top},400); //브라우저마다 처리가 달라서 둘 다 가져옴
        });




    });
})(jQuery);