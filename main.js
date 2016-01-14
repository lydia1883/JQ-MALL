// JavaScript Document

$(function(){
    /*导航条*/	
	  $(function(){	
		$("#nav ul li").hover(function(){
			
			$(this).find("div").show();
			
			},function(){
				
			$(this).find("div").hide();	
				
				});
		
	  });
	
   <!--换肤-->
	$(function (){
		/*
			var oLink=$("link.skin")
			$(".skin_wrap ul li").click(function(){
				var oId=$(this).attr("id");
				 oLink.attr("href",(oId+'.css'));
				 $.cookie("MyCssSkin",oId,{path:'/',expires:10 });
			
			 $(".skin_wrap ul li").attr("class","");
				$(this).attr("class","selected") 
			
			});	 */
			
			var oLink=$("link.skin")
			$(".skin_wrap ul li").click(function(){
				
				switchSkin($(this).attr("id"));

				});
			var cookie_skin=$.cookie("MyCssSkin");
			if(cookie_skin){	
				switchSkin(cookie_skin);
				alert(1)
				}	
		
			function switchSkin(skinName){
				
			    $('#'+skinName).addClass("selected").siblings().removeClass("selected");	
				 var oId= $(skinName).attr("id");
				 oLink.attr("href",(skinName+'.css'));
				$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
				
				}
		
			
		});
   		
	<!--焦点图切换-->
	$(function(){	

	     var aImg=$(".ball_img_box ol li");
		 var tb_timer=null;
		 var $_this=null;
		 var num=0;
	     var _zindex=0;
		 tab_main(num);
		 var onOff=true;
	   $(".ball_img ul li").bind("click",function(){
			 if(!onOff || num==this.index){
			 onOff=false;
			 }
			 num=$(this).index();
			 tab_main(num);
		  })
	   $(".ball_img").bind("mouseover",function(){
		   clearInterval(tb_timer);
		   });
		 $(".ball_img_box").bind("mouseout",function(){
		   tb_timer=setInterval(function(){
				 num++;
				if(num==aImg.length){	
				  num=0;
				}
				tab_main(num)
			   },3000);	 
		   
		   })   
	    tb_timer=setInterval(function(){
		 	 num++;
			if(num==aImg.length){	
			  num=0;
			}
		    tab_main(num)
		   },3000);	  
		   
		   
	    function tab_main(_num){
			 if(!onOff){return;}
			 onOff=false;
			 _zindex++;
			 
			aImg.stop(true).animate({opacity:0.2});
			  
			 aImg.eq(_num).stop(true).animate({opacity:1},700,function(){
			 onOff=true; 
			 
			 }); 
			 
			  aImg.eq(_num).css("zIndex",_zindex);
			  $(".ball_img ul li").attr("class","")
			  $(".ball_img ul li").eq(_num).attr("class","active");
			 
			}
		 
	});
	
	   <!--右侧广告滚动效果-->
	   
	  $(function(){
		  
		  
		  setInterval(taken,5000);
		   var now=0;
		  function taken(){
			 var oUl=$(".single_ad_details_watch ul");	
			 now++;
			 if(now==3){
			  now=0;
			  oUl.css("top",0);	 
			 }	  
			 oUl.animate({ 
				top:-($(".single_ad_details_watch").height())*now
			    },2000); 
    		}

 })
	
	
			
			
	});
