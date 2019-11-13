// JavaScript Document
$(function(){ 
	/*作品子导航选项卡效果 起始*/
	$('.subnav').children('a').click(function(){ 
		var index=$(this).index();
		$(this).addClass('bgcolor').siblings().removeClass('bgcolor');
		tag(index);
	});
	var arr = ['all','ui','wy','pm']
	function tag(index){
		str = '.'+arr[index]
		$('.content_middle').children(str).css('display','block');
		$('.content_middle').children(str).siblings().hide();
	};		
	/*作品子导航选项卡效果 结束*/
});