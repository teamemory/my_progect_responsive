/**
 * Created by bjwsl-001 on 2016/12/9.
 */
/*鼠标移入进行切换*/
$('.fangan1').on('mouseenter', function () {
    $('.cx1').css('display','none');
    $('.cx2').css('display','block');
    $('.product_detail .title p.fangan1').css('background','#3D56A6');
    $('.product_detail .title p.pro1').css('background','#C0C0C0');
});
$('.pro1').on('mouseenter', function () {
    $('.cx1').css('display','block');
    $('.cx2').css('display','none');
    $('.product_detail .title p.fangan1').css('background','#C0C0C0');
    $('.product_detail .title p.pro1').css('background','#3D56A6');
});
/*政务云切换*/
$('.g1').on('mouseenter', function () {
    $('.r1').css('display','block');
    $('.r1').siblings('.list-unstyled').css('display','none');
});
$('.g2').on('mouseenter', function () {
    $('.r2').css('display','block');
    $('.r2').siblings('.list-unstyled').css('display','none');
});
$('.g3').on('mouseenter', function () {
    $('.r3').css('display','block');
    $('.r3').siblings('.list-unstyled').css('display','none');
});
$('.g4').on('mouseenter', function () {
    $('.r4').css('display','block');
    $('.r4').siblings('.list-unstyled').css('display','none');
});
$('.g5').on('mouseenter', function () {
    $('.r5').css('display','block');
    $('.r5').siblings('.list-unstyled').css('display','none');
});
$('.g6').on('mouseenter', function () {
    $('.r6').css('display','block');
    $('.r6').siblings('.list-unstyled').css('display','none');
});

/*动画*/
$(".donghua").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated  rotateIn');
});
$(".donghua").on("mouseout",function(e){
    var This=$(this);
    This.removeClass('animated  rotateIn');
});