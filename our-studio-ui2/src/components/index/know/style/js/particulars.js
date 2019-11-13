// JavaScript Document
$(function(){
	$('.publish').click(function(){ 
		/*判断内容是否为空，如果为空，提示输入内容*/
		if($('.con').val() == ''){
			alert('请输入内容');	
		}else{
			/*获取textarea的值*/	
			var txt=$('textarea').val();
			/*获取oneselfName  昵称的值*/
			var oneselfName = $('.oneselfName').val();
			/*在类floor的起始处插入li	*/
			$('.floor').prepend('<li></li>');
			/*在li的起始处插入div与p*/
			$('.floor li').eq(0).prepend('<div></div>'+'<p>'+txt+'</p>');
			/*在div的起始处插入img 与 h4*/
			$('.floor li').eq(0).children('div').prepend('<img></img>'+'<h4>'+oneselfName+'</h4>');
			/*清除取oneselfName  昵称的值*/
			$('.oneselfName').val('');
			/*清除textarea的值*/
			$('.con').val('');
			var ab=$('.man').attr('checked');
			if(ab == 'checked'){
				/*给男 img添加属性*/
				$('.floor li div').eq(0).children('img').attr('src','img/avatar_man.jpg');
			}else{
				/*给女 img添加属性*/
				$('.floor li div').eq(0).children('img').attr('src','img/avatar_woman.jpg'); 
			}
			/*为第一个li添加下滑动画，第一个li就是最后插入的li*/
			$('.floor li:first').hide().slideDown();	
		}
	});
	$(window).scroll(function(e) {
		if($(window).scrollTop() > $(window).height()){
			$('.topCon').show();
		}else {
			$('.topCon').hide();
		}
	});
	$('.topCon').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},1000);
	});	
});