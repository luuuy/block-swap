var data = [
	 {
		bg:"red", //empty
		"id" : "d0",
		position :0
	},
	{
		bg:"blue",
		"id" : "d1",
		position :1
	},
	{
		bg :"black",
		"id" : "d2",
		position :2
	},
	{
		bg :"lightgreen",
		"id" : "d3",
		position :3
	},
	{
		bg :"yellow",
		"id" : "d4",
		position :4
	},
	{
		bg :"orange",
		"id" : "d5",
		position :5
	},
	{
		bg :"#123456",
		"id" : "d6",
		position :6
	},
	{
		bg :"lightblue",
		"id" : "d7",
		position :7
	},
	{
		bg :"gray",
		"id" : "d8",
		position :8
	}
]

var empty =
[0,0,0,
0,0,0,
0,0,1]

$(document).ready(function () {

	for(var i=0;i<9;i++){
		$("#"+data[i].id).css({
			"background-color":data[i].bg
		})
	}

	$(".block").click(function () {
		console.log(this.id)
		$().swap(this);
	});

})

$.fn.swap = function(obj){

	var now;

	for(var i=0;i < 9;i++){
		if(data[i].id == obj.id){
			now = data[i].position;
			break;
		}
	}

	$("#"+obj.id).css({
		"background-color": data[now+1].bg
	})
	$("#"+data[now+1].id).css({
		"background-color" : data[now].bg
	});

	//swap
	$().data_bg_swap(data[now],data[now+1]);

}

$.fn.data_bg_swap = function(x,y){
	var temp = x.bg;
	x.bg = y.bg;
	y.bg = temp;
}

$.fn.Find = function(){

}





