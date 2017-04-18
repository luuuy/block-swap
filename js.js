var data = [
	 {
		bg:"0.jpg", //empty
		"id" : "d0",
		position :0
	},
	{
		bg:"1.jpg",
		"id" : "d1",
		position :1
	},
	{
		bg :"2.jpg",
		"id" : "d2",
		position :2
	},
	{
		bg :"3.jpg",
		"id" : "d3",
		position :3
	},
	{
		bg :"4.jpg",
		"id" : "d4",
		position :4
	},
	{
		bg :"5.jpg",
		"id" : "d5",
		position :5
	},
	{
		bg :"6.jpg",
		"id" : "d6",
		position :6
	},
	{
		bg :"7.jpg",
		"id" : "d7",
		position :7
	},
	{
		bg :"9.jpg",
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
			"background-image": "url(img/"+data[i].bg+")"
		})
	}

	$(".block").click(function () {
		$().swap(this);
	});

})

$.fn.swap = function(block){

//現在是哪個格子
	var block_position;
	for(var i=0;i<9;i++){
		if(block.id == data[i].id){
			block_position = data[i].position;
			break;
		}
	}
	var empty_position = empty.indexOf(1);
	//防呆
	if(block_position == empty_position){
		console.log("點空格子");
	}

	//看是不是能交換


	if($().swapable(block_position,empty_position)){
		$("#"+data[empty_position].id).css({
			"background-image": "url(img/"+data[block_position].bg+")"
		})
		$("#"+data[block_position].id).css({
			"background-image": "url(img/"+data[empty_position].bg+")"
		});

		$().data_bg_swap(data[empty_position],data[block_position]);
		$().empty_swap(empty_position,block_position);

	}

	//swap

}

$.fn.data_bg_swap = function(x,y){
	var temp = x.bg;
	x.bg = y.bg;
	y.bg = temp;
}
$.fn.empty_swap = function(x,y){
	var temp = empty[x];
	empty[x] = empty[y];
	empty[y] = temp;
}

$.fn.swapable = function(block_position,empty_position){
	block_position++; //0 -> 1
	empty_position++;
	if(block_position+3 == empty_position || block_position-3 == empty_position)
		return true;
	if(block_position+1 == empty_position && block_position%3 != 0)
		return true;
	if(block_position-1 == empty_position && block_position%3 != 1)
		return true;

	return false;
}





