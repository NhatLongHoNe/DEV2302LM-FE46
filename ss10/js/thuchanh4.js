// b1: click vào btn lấy valueid, xóa toàn bộ 
//các active của btn và content 
// b2: gán class active vào btn, content 
//được click bằng từ khóa $(this)


$(document).ready(function(){
    $(".btn").click(function(){
        $("li").removeClass("active");
       var valueid = $(this).parent().attr('id');
       $("#"+valueid).addClass("active");


       $(".content").removeClass("active");
       $("#content-"+valueid).addClass("active");
    })
});