
	;var jq = $.noConflict();
	jq(function(){
		var mySwiper = new Swiper('.swiper-container', {
				autoplay: 4000,//可选选项，自动滑动
				autoplayDisableOnInteraction : false,
				loop: true,
				touchRatio : 0.5,//拖动大于一半才会换图
				// resistance : false,//第一张或最后一张继续向边缘拖动，释放弹回
				pagination : '.swiper-pagination',
				paginationElement : 'li',
		})
		/*
		页面初始化
		1、电台部分随机获取两个内容填充
		2，热门歌单加载4个，之后动态加载，每次加载四个
		*/

		var radioData = [
							{
								"path":"images/content1.jpg",
								"desc":"热歌"
							},{
								"path":"images/content2.jpg",
								"desc":"一人一首招牌歌"
							},{
								"path":"images/content3.jpg",
								"desc":"记忆深处的那首歌"
							},{
								"path":"images/content4.jpg",
								"desc":"奈何情深缘浅"
							}
							,{
								"path":"images/content5.jpg",
								"desc":"曾经年少轻狂，岁月静好"
							}
							,{
								"path":"images/content6.jpg",
								"desc":"一个人的狂欢"
							}
						];
		var songsData = [
							{
								"path":"images/hotsongs1.jpg",
								"desc":"编辑推荐 | 迷失北欧系列",
								"times":"128.4万",
								"author": "小太阳"
							},{
								"path":"images/hotsongs2.jpg",
								"desc":"华语 | 谁把民谣听成了酒",
								"times":"105.5万",
								"author": "南山"
							},{
								"path":"images/hotsongs3.jpg",
								"desc":"欧美 | 暖冬依偎在阳光",
								"times":"49.3万",
								"author": "snnny"
							},{
								"path":"images/hotsongs4.jpg",
								"desc":"韩语 | 二段横踢作品精选",
								"times":"29.8万",
								"author": "Kevin"
							}
							,{
								"path":"images/hotsongs5.jpg",
								"desc":"走心 | 寂寞的时候还",
								"times":"105.2万",
								"author": "Suunto"
							}
							,{
								"path":"images/hotsongs6.jpg",
								"desc":"唱一首名叫自己的歌",
								"times":"105.2万",
								"author": "maya"
							}
							,{
								"path":"images/hotsongs7.jpg",
								"desc":"编辑推荐 | 迷失北欧系列",
								"times":"100.1万",
								"author": "snnny"
							},{
								"path":"images/hotsongs8.jpg",
								"desc":"华语 | 谁把民谣听成了酒",
								"times":"77.9万",
								"author": "诗人"
							},{
								"path":"images/hotsongs9.jpg",
								"desc":"欧美 | 暖冬依偎在阳光",
								"times":"95.2万",
								"author": "暮色瑾年"
							},{
								"path":"images/hotsongs10.jpg",
								"desc":"韩语 | 二段横踢作品精选",
								"times":"139.0万",
								"author": "穆里奇"
							}
							,{
								"path":"images/hotsongs11.jpg",
								"desc":"走心 | 寂寞的时候还",
								"times":"85.5万",
								"author": "露琪"
							}
							,{
								"path":"images/hotsongs1.jpg",
								"desc":"唱一首名叫自己的歌",
								"times":"128.2万",
								"author": "陆宇"
							}
						]
		var randomList = getRandom(2,6);

		var radioObj = {
			items : [radioData[randomList[0] - 1],radioData[randomList[1] -1]]
		}
		var songObj = {
			songs: [songsData[0],songsData[1],songsData[2],songsData[3]]
		}
		var result = template('template', radioObj);
		var song = template('songs', songObj);
		jq('.radio').append( jq(result));
		jq('#box').append( jq(song));

		// 底部距离顶部的高度
		var distance = jq('footer').offset().top;

		// 屏幕的高度
		var clientY = jq(document).height();
		// 滚动条滚动的高度
		var startY = 0, moveY = 0, distanceY = 0, lock = true;

		/*
		 count {number} 获取随机数的个数
		 max {number} 最大取值范围
		*/
		function getRandom(count,max){
			if(count === 1){
				return parseInt(Math.random() * max + 1);
			}
			// 存放随机数的数组
			var arr = [] , json = {}, len = arr.length;
			for(var i = 0 ; ; i++){
				if(len < count){
					var key = parseInt(Math.random() * max + 1);
					if(json[key] == undefined){
						json[key] = key;
						arr.push(key);
						len++;
					}
				}else{
					break;
				}
			}
			return arr ; 
		}

		var swipeCount = 0;
	$('.loaded').swipeUp(function(){
			swipeCount++;
			$(this).hide();
			$('.load').show().animate({
				'height': '20px'
			},200,function(){
				setTimeout(function(){
					$('.load').hide();
					$('.loaded').show(100);
					// 请求结束
					var songObj = {};
					switch(swipeCount){
						case 1:
						songObj = {
							songs: [songsData[4],songsData[5],songsData[6],songsData[7]]
						};
						break;
						case 2:
						songObj = {
							songs: [songsData[8],songsData[9],songsData[10],songsData[11]]
						};
						break;
						default:
						break;
					}
					if(songObj.songs != undefined){
						var song = template('songs', songObj);
						$('.hotSongs').append( $(song));
					}else{
						$('.loaded').text('没有更多数据啦……')
					}
						
				},750)
				
			})
			
	})

	window.onload = function(){
		// 点击播放音乐
		$('.radio').find('figure').eq(0).tap(function(){
			console.log('....')
			window.location.href = 'views/play.html';
		})
		$('body').swipeLeft(function(){
			window.location.href = 'views/ranking.html';
		})
		$('.ranking').tap(function(){
			window.location.href = 'views/ranking.html';
		})
	}

	})	
