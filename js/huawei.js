/*����2*/
$(".donghua2").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated shake');
});
$(".donghua2").on("mouseout",function(e) {
    var This = $(this);
    This.removeClass('animated shake');
});
$('.dibu h3').on('click',function(){
    $(this).next().toggleClass('in');
});
/*��Ƶ���ſ���*/
var btn = document.querySelector('.btn-control');
btn.onclick = function(){
    if(v4.paused){    //��ǰ������ͣ״̬
        v4.play();
        this.src="img/pause.png";
    }else {           //��ǰ���ڲ���״̬
        v4.pause();
        this.src="img/play.png";
    }
}

//���������Ƶ��������ʾ��ť���Ƴ�������
var div = document.querySelector('.yiru');
div.onmouseenter = function(){
    btn.style.display = 'block';
}
div.onmouseleave = function(){
    btn.style.display = 'none';
}

//��Ƶ��ͣ����ʾ��棻���������ع��
var ad = document.querySelector('.ad');
v4.onplay = function(){
    ad.style.display = 'none';
}
v4.onpause = function(){
    ad.style.display = 'block';
}