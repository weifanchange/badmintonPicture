$(document).ready(function () {

    // 輪播效果-不要用LOAD會最慢執行
    // $(window).on("load",function() {
        $('#slider').nivoSlider();
    // });

    let images = document.querySelectorAll(".img-width");
    lazyload(images);

    
    // 依 scroll 顯示/隱藏 Top button
    $(window).scroll(function(){
        var scrollTopValue = $(this).scrollTop();
        if(scrollTopValue >= 200){
            $('.back2Top').show();
        }
        else{
            $('.back2Top').hide();
        }
    });

    // Top button 按鍵效果
    $('.back2Top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    
    // 瀑布流效果
    $(function(){
        var $container;
        $container = $('._container');
        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: '.content_box',
                columnWidth: 0,
                animate:true
            });
        });
    });
    // 字串補零 ()
    function paddingLeft(str,lenght){
        if(str.length >= lenght)
            return str;
        else
            return paddingLeft("0" +str,lenght);
    }

    // 導入圖片
    function appendPic(pic, filePath, imgNum){
        var totalPath;
        for(var i=1;i<=imgNum;i++){
            totalPath = filePath+paddingLeft(i.toString(),4)+".jpg";
            totalPath = "<div class=\"content_box\"><a href=\"b"+
                totalPath+"\"data-lightbox=\""+filePath+"\"><img class=\"img-width\" src=\""+
                totalPath+"\"/></a></div>";
            // console.log(totalPath);
            $(pic).append(totalPath);
        }
    }

    appendPic('.pic1',"img/20170103/",6);
    appendPic('.pic2',"img/20170204/",12);
    appendPic('.pic3',"img/20170304/",23);
    appendPic('.pic4',"img/20170520/",18);
    appendPic('.pic5',"img/20170806/",22);
    appendPic('.pic6',"img/20170902/",19);
    appendPic('.pic7',"img/20171001/",36);
    appendPic('.pic8',"img/20180210/",25);
    appendPic('.pic9',"img/20180310/",16);
    appendPic('.pic10',"img/20180603/",47);
    appendPic('.pic11',"img/20180609/",25);
    appendPic('.pic12',"img/20180825/",20);
    appendPic('.pic13',"img/20180921/",67);
});