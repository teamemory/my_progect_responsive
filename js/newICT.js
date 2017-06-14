/*视频播放控制*/
var btn = document.querySelector('.btn-control');
btn.onclick = function(){
    if(v4.paused){    //当前处于暂停状态
        v4.play();
        this.src="img/pause.png";
    }else {           //当前处于播放状态
        v4.pause();
        this.src="img/play.png";
    }
}

//鼠标移入视频容器，显示按钮；移出就隐藏
var div = document.querySelector('.yiru');
div.onmouseenter = function(){
    btn.style.display = 'block';
}
div.onmouseleave = function(){
    btn.style.display = 'none';
}

//视频暂停则显示广告；播放则隐藏广告
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
/*动画*/
$(".donghua").on("mouseenter",function(e){
    var This=$(this);
    This.addClass('animated shake');
});
$(".donghua").on("mouseout",function(e){
    var This=$(this);
    This.removeClass('animated shake');
});