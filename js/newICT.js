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
var h1=document.querySelector('.love');
var h3=document.querySelector('.mingjie');
v4.onplay = function(){
    ad.style.display = 'none';
    h1.style.display = 'none';
    h3.style.display = 'none';

}
v4.onpause = function(){
    ad.style.display = 'block';
    h1.style.display = 'block';
    h3.style.display = 'block';
}
/*����*/
$(".donghua").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated shake');
});
$(".donghua").on("mouseout",function(e){
    var This=$(this);
    This.removeClass('animated shake');
});