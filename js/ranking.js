
var data = [
				{
					"url":"images/ranking1.jpg",
					"alt":"斯柯达巅峰榜",
					"title":"斯柯达汽车·巅峰榜·流行指数",
					"times":"105.5万",
					"list": [
								{
									"name":"PLAYING WITH FIRE (불장난)",
									"author":"BLACKPINK"
								},
								{
									"name":"STAY",
									"author":"BLACKPINK"
								},
								{
									"name":"等一生",
									"author":"胡夏"
								}

							]
				},
				{
					"url":"images/ranking2.jpg",
					"alt":"巅峰榜",
					"title":"巅峰榜·热歌",
					"times":"105.5万",
					"list": [
								{
									"name":"演员",
									"author":"薛之谦"
								},
								{
									"name":"丑八怪",
									"author":"薛之谦"
								},
								{
									"name":"告白气球",
									"author":"周杰伦"
								}

							]
				},
				{
					"url":"images/ranking3.jpg",
					"alt":"中国新歌声",
					"title":"巅峰榜·中国新歌声",
					"times":"105.5万",
					"list": [
								{
									"name":"告白气球(Live)",
									"author":"周杰伦"
								},
								{
									"name":"你还要我怎样(Live)",
									"author":"薛之谦"
								},
								{
									"name":"小幸运(Live)",
									"author":"白静晨"
								}

							]
				},
				{
					"url":"images/ranking4.jpg",
					"alt":"新歌",
					"title":"巅峰榜·新歌",
					"times":"105.5万",
					"list": [
								{
									"name":"PLAYING WITH FIRE (불장난)",
									"author":"BLACKPINK"
								},
								{	
									"name":"等一生",
									"author":"胡夏"
								},
								{
									"name":"STAY",
									"author":"BLACKPINK"
								}

							]
				},
				{
					"url":"images/ranking5.jpg",
					"alt":"网络歌曲",
					"title":"巅峰榜·网络歌曲",
					"times":"105.5万",
					"list": [
								{
									"name":"PPAP(清新版)",
									"author":"陈柯宇"
								},
								{
									"name":"孤独坠爱",
									"author":"庄心妍"
								},
								{
									"name":"傻傻等",
									"author":"孙子涵"
								}

							]
				},
				{
					"url":"images/ranking6.jpg",
					"alt":"内地榜",
					"title":"巅峰榜·内地榜",
					"times":"105.5万",
					"list": [
								{
									"name":"后天",
									"author":"张靓颖"
								},
								{
									"name":"幸福的终点",
									"author":"曾婕"
								},
								{
									"name":"微微一笑很倾城",
									"author":"杨洋"
								}

							]
				},
				{
					"url":"images/ranking7.jpg",
					"alt":"港台榜",
					"title":"巅峰榜·港台榜",
					"times":"105.5万",
					"list": [
								{
									"name":"你干嘛",
									"author":"罗志祥"
								},
								{
									"name":"EGO-HOLIC",
									"author":"曾婕"
								},
								{
									"name":"全世界谁倾听你",
									"author":"林宥嘉"
								}

							]
				}
			]
var dataObj = {
	items : data
}

var ul = document.querySelector('.ranking-list');
var result = template('template', dataObj);
$('.ranking-list').append($(result));

$('.index').tap(function(){
	window.location.href = '../index.html';
})
$('body').swipeRight(function(){
	window.location.href = '../index.html';
})
