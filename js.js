var indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var data = shuffle(indices).map(function(d, i) {
	return {bg: d + ".jpg", "id": "d" + i, position: i}
});

//空格的位置

var empty =
[0,0,0,
0,0,0,
0,0,0];

var randomBlack = Math.floor(Math.random() * 9);
data[randomBlack].bg = "9.jpg";
empty[randomBlack] = 1;

$(document).ready(function () {

	//載入圖片
	for(var i=0;i<9;i++){
		$("#"+data[i].id).css({
			"background-image": "url(img/"+data[i].bg+")"
		})
	}
	//開始玩
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
	//空格子的位置
	var empty_position = empty.indexOf(1);

	//看是不是能交換
	if($().swapable(block_position,empty_position)){
		//圖片交換
		$("#"+data[empty_position].id).css({
			"background-image": "url(img/"+data[block_position].bg+")"
		})
		$("#"+data[block_position].id).css({
			"background-image": "url(img/"+data[empty_position].bg+")"
		});
		//交換資料
		$().data_bg_swap(data[empty_position],data[block_position]);
		$().empty_swap(empty_position,block_position);
	}
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

//可不可以交換
$.fn.swapable = function(block_position,empty_position){
	//0 -> 1
	block_position++;
	empty_position++;

	if(block_position+3 == empty_position || block_position-3 == empty_position)
		return true;
	if(block_position+1 == empty_position && block_position%3 != 0)
		return true;
	if(block_position-1 == empty_position && block_position%3 != 1)
		return true;

	return false;
}

function shuffle(array) {
	let counter = array.length;
	while (counter > 0) {
			// Pick a random index
			let index = Math.floor(Math.random() * counter);

			counter--;

			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
	}
	return array;
}
