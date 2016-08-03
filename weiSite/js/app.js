$(function () {
});

window.ws = {};

ws.ui = {};
ws.ui.swiper = function () {
    var mySwiper = new Swiper ('.swiper-container', {
        //loop: true,
        autoplay: 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination'

    })
};
ws.ui.preloader = function(){
    var loading = false;  //状态标记
    $('.j-loader').infinite().on("infinite", function() {
        if(loading) return;
        loading = true;
        setTimeout(function() {
            $(".j-listCnt").append("<p> 我是新加载的内容 </p>");
            loading = false;
        }, 1500);   //模拟延迟
    });
};
