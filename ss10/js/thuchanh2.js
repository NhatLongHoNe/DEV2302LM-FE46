// cách 1
// b1 Bắt event từ button để lấy được value id (vd: id="red" => get value = red)
// b2 Khi lấy được value gán text có style color = value (color = red = id)

$(document).ready(function(){
    $(".btn-color").click(function(){
        // b1
        var valueId = $(this).attr('id');
        // b2
        $("#txtContent").css("color",valueId)
    })
})