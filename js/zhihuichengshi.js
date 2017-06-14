$(".donghua2").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated rotateIn');
});
$(".donghua2").on("mouseout",function(e) {
    var This = $(this);
    This.removeClass('animated rotateIn');
});

$(".donghua3").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated pulse');
});
$(".donghua3").on("mouseout",function(e) {
    var This = $(this);
    This.removeClass('animated pulse');
});
