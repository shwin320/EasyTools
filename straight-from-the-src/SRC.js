var startup = function(){
	$("#timeline").hide();
	$("#prog").hide();
	$("#back").hide();
	$("#play").hide();
	$("#skip").hide();
	$("#reap").hide();
	$("#full").hide();
	$("#save").hide();
	$("#delete").hide();
	var numOSongs = Number(localStorage.getItem("number"));
	var i;
	for(i = 1; i <= numOSongs; i++){
		var getData = "savedSRC"+i.toString();
		var dataRAW = localStorage.getItem(getData);
		if(dataRAW != null){
var resArray = dataRAW.split("|:)SRC(:|");
$("#playOps").prepend('<option value="'+dataRAW+'">'+resArray[1]+'</option>');
$("#songDelete").prepend('<option value="'+getData+'">'+resArray[1]+'</option>');
		};
	};
};
var playSRC = function(srcURL, type){
	$("#media").remove();
	if (type == "v"){
		var $media = $("<video id='media' autoplay='' ontimeupdate='$progress()' onended='again()'><source src='"+srcURL+"'></video>");
		$media.appendTo("#contain");
		$("#timeline").show();
		$("#prog").show();
		$("#back").show();
		$("#play").show();
		$("#skip").show();
		$("#reap").show();
		$("#full").show()
		$("#play").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/pause.svg").attr("alt", "Pause").attr("title", "Pause");
	} else if (type == "a"){
		var $media = $("<audio id='media' autoplay='' ontimeupdate='$progress()' onended='again()'><source src='"+srcURL+"'></audio>");
		$media.appendTo("#contain");
		$("#timeline").show();
		$("#prog").show();
		$("#back").show();
		$("#play").show();
		$("#skip").show();
		$("#reap").show();
		$("#full").hide();
		$("#play").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/pause.svg").attr("alt", "Pause").attr("title", "Pause");
	} else if (type == "p"){
		var $media = $("<img id='media' src='"+srcURL+"'>");
		$media.appendTo("#contain");
		$("#timeline").hide();
		$("#prog").hide();
		$("#back").hide();
		$("#play").hide();
		$("#skip").hide();
		$("#reap").hide();
		$("#full").show();
		$("#full").find("img").css("height", "5vh");
	};
	$("#URL").val("");
};
var $play = 1;
var $reap = 0;
var $getSRC = function(evt){
	$(this).find("input").blur();
	evt.preventDefault();
	$("#media").remove();
	var $type = $("#type").val();
	var $url = $("#URL").val();
	playSRC($url, $type);
};
var $progress = function(){
	var $prog = $("#prog");
	var cur = document.getElementById("media").currentTime;
	var dur = document.getElementById("media").duration;
	var percent = (cur/dur)*100;
	$prog.css("width", percent+"%");
	$("#start").remove();
	$("#end").remove();
	var curHMS = hms(cur);
	var durHMS = hms(dur);
	$("#point").remove();
	$("<p>").text(curHMS+"/"+durHMS)
		.attr("id", "point")
		.appendTo("#timeline");
};
var full = function() {
	$(this).blur();
	if(document.fullscreenElement){
		document.exitFullscreen();
		$("#full").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/full.svg").attr("alt", "Fullscreen").attr("title", "Fullscreen");
		$("#full").find("img").css("height", "35px");
	}else{
		document.getElementById("inter").requestFullscreen();
		$("#full").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/no-full.svg").attr("alt", "Exit Fullscreen").attr("title", "Exit Fullscreen");
	}
};
var hms = function(seconds){
	var s = seconds;
	var m = "00";
	var h = "00";
	s = Math.floor(s);
	if(s >= 60){
		m = Math.floor(s/60);
		s = s-(m*60);
		if(m >= 60){
h = Math.floor(m/60);
m = m-(h*60);
		};
	};
	s = s.toString();
	m = m.toString();
	h = h.toString();
	
	s = s.padStart(2, "0");
	m = m.padStart(2, "0");
	h = h.padStart(2, "0");
	var time = h+":"+m+":"+s;
	return time;
};
$("#full").on("click", full);
$("#select").on("submit", $getSRC);
var $playPause = function(){
	$(this).blur();
	if ($play == 1){
		$play = 0;
		$("#play").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/play.svg").attr("alt", "Play").attr("title", "Play");
		document.getElementById("media").pause();
	} else if($play == 0){
		$play = 1;
		$("#play").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/pause.svg").attr("alt", "Pause").attr("title", "Pause");
		document.getElementById("media").play();
	};
};
var repeater = function(){
	$(this).blur();
	if ($reap == 1){
		$reap = 0;
		$("#reap").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/repeat-no.svg").attr("alt", "Don\'t Repeat").attr("title", "Don\'t Repeat");
	} else if($reap == 0){
		$reap = 1;
		$("#reap").find("img").attr("src", "https://cdn.jsdelivr.net/gh/shwin320/straight-from-the-src@641a2e7/repeat.svg").attr("alt", "Repeat").attr("title", "Repeat");
	};
};
var rewind = function(){
	$(this).blur();
	var now = document.getElementById("media").currentTime;
	now = parseFloat(now);
	now = now-10;
	if(now < 0){
		now = 0;
	};
	now = now.toString();
	document.getElementById("media").currentTime = now;
};
var skip = function(){
	$(this).blur();
	var length = document.getElementById("media").duration;
	var now = document.getElementById("media").currentTime;
	now = parseFloat(now);
	length = parseFloat(length);
	now = now+10;
	if(now > length){
		now = length;
	};
	now = now.toString();
	document.getElementById("media").currentTime = now;
};
var again = function(){
	if($reap == 1){
		document.getElementById("media").currentTime = 0;
		document.getElementById("media").play();
	} else if ($reap == 0){
		$play = 1;
		$playPause();
	};
};
$("#skip").on("click", skip);
$("#back").on("click", rewind);
$("#play").on("click", $playPause);
$("#reap").on("click", repeater);
var save = function(e){
	e.preventDefault();
	$(this).find("input").blur();
	$("#save").hide();
	if (localStorage.getItem("number") != "") {
		localStorage.setItem("number", Number(localStorage.getItem("number"))+1);
	} else {
		localStorage.setItem("number", 1);
	};
	var num = localStorage.getItem("number");
	var name = $("#songTitle").val();
	var url = $("#newURL").val();
	var type = $("#newType").val();
	var locNum = "savedSRC"+num;
	var locItem = num+"|:)SRC(:|"+name+"|:)SRC(:|"+url+"|:)SRC(:|"+type;
	localStorage.setItem(locNum, locItem);
	$("#songTitle").val("");
	$("#newURL").val("");
	$("#save").hide();
	var saveNow = localStorage.getItem(locNum);
	$("#playOps").prepend('<option value="'+saveNow+'">'+name+'</option>');
	$("#songDelete").prepend('<option value="'+locNum+'">'+name+'</option>');
};
var del = function(e){
	e.preventDefault();
	$(this).find("input").blur();
	var itemToDelete = $("#songDelete").val();
	var valOfDel = localStorage.getItem(itemToDelete);
	var nameToDel = valOfDel.split("|:)SRC(:|");
	if(confirm("Are you sure you want to delete "+nameToDel[1]+"?")){
		$("#delete").hide();
		localStorage.removeItem(itemToDelete);
		$("#playOps").find("option").remove();
		$("#songDelete").find("option").remove();
		$('<option value="SAVE">-Save</option><option value="DELETE">-Delete</option>').appendTo("#playOps");
		var numOSongs = Number(localStorage.getItem("number"));
		var i;
		for(i = 1; i <= numOSongs; i++){
var getData = "savedSRC"+i.toString();
var dataRAW = localStorage.getItem(getData);
if(dataRAW != null){
	var resArray = dataRAW.split("|:)SRC(:|");
	$("#playOps").prepend('<option value="'+dataRAW+'">'+resArray[1]+'</option>');
	$("#songDelete").prepend('<option value="'+getData+'">'+resArray[1]+'</option>');
};
		};
	}
};
var savePlay = function(e){
	e.preventDefault();
	$(this).find("input").blur();
	var option = $("#playOps").val();
	if(option == "SAVE"){
		$("#save").show();
		$("#delete").hide();
	} else if(option == "DELETE"){
		$("#save").hide();
		$("#delete").show();
	} else{
		$("#save").hide();
		$("#delete").hide();
		var playItem = $("#playOps").val();
		var playArray = playItem.split("|:)SRC(:|");
		playSRC(playArray[2], playArray[3]);
		
	};
};
$("#playlist").on("submit", savePlay);
$("#save").on("submit", save);
$("#delete").on("submit", del);
var focusGone = 0;
$("input").on("focus", function(){
	focusGone = 1;
});
$("input").on("focusout", function(){
	focusGone = 0;
});
$("html").on("keydown", function(e){
	if(focusGone == 0){
		if(e.keyCode == 37){
e.preventDefault();
rewind();
		}else if(e.keyCode == 39){
e.preventDefault();
skip();
		}else if(e.keyCode == 32){
e.preventDefault();
$playPause();
		};
	};
});
