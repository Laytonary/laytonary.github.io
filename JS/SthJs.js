//document.getElementById('date-and-time').innerHTML= "Click again to update real-time"; this.innerHTML = Date()"document.getElementById('date-and-time').innerHTML= "Click again to update real-time"; this.innerHTML = Date()"//
/*
$(".normal .gridPanel button").click(function(){
	if(gridPanelCC==1 && $("#a1").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==2 && $("#a12").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==3 && $("#a9").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==4 && $("#a19").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==5 && $("#a23").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==6 && $("#a4").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==7 && $("#a20").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==8 && $("#a16").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==9 && $("#a7").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==10 && $("#a13").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==11 && $("#a5").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==12 && $("#a24").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==13 && $("#a17").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==14 && $("#a22").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==15 && $("#a10").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==16 && $("#a2").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==17 && $("#a3").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==18 && $("#a25").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==19 && $("#a18").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==20 && $("#a6").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==21 && $("#a21").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==22 && $("#a14").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==23 && $("#a11").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==24 && $("#a8").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1} else{$(".normal .gridPanel button").css("background", "grey")}
	if(gridPanelCC==25 && $("#a15").css("background").includes("rgb(255, 255, 255)")){gridPanelCC+=1}else{$(".normal .gridPanel button").css("background", "grey")}
	console.log(gridPanelCC);
	$(this).css("background", "white");
	if(gridPanelCC>=25){alert("hihi")}
})
*/


var clickCounter = 0;
var gridPanelCC=1;
var hiddenObjectCounter=0;
$("span").hide();
$(".chatBox").hide();
// $(".secret-ctn").hide();

function tresureZone(){
  clickCounter += 1;
  if (clickCounter != 5){
    setTimeout(clearClick, 3000);
  }
}

function clearClick(){clickCounter = 0}

function showCoods(event){
  var popup = document.getElementById("coodi");
  var x = event.offsetX;
  var y = event.offsetY;
  popup.style.left = (x-95) + 'px';
  popup.style.top = (y-60) + 'px';
  var text = document.getElementById("coodi").innerHTML = 'X = ' + x +'; Y = ' + y;
}

function deleteCoods(event){
  var text = document.getElementById("coodi").innerHTML = "";
}

function toggle(){
  $(".tresure").toggle();
  $("span").toggle();
  var z = document.getElementById("switch");
  if(z.innerHTML==="OFF"){z.innerHTML="ON"} else {z.innerHTML="OFF"};
}

function submitPass(){
	var pass = document.getElementById("secretDoor").value;
	if (pass === "12345") {
		var chng = document.getElementById("passImg").src="/Resource/OpenDoor.png";
		var chng2 = document.getElementById("secretImg").src="/Resource/kinhlup.png";
	} else {
		alert("Wrong Password");
		var chng = document.getElementById("passImg").src="/Resource/CloseDoor.png";
		var chng2 = document.getElementById("secretImg").src="";
	}
}

function inputNum(num){
	var safePass=document.getElementById("pPass").innerHTML += num
}

function safeClear(){
	var safePassClear=document.getElementById("pPass").innerHTML = "";
}

function safeEnter(){
	var safePassEnter=document.getElementById("pPass").innerHTML;
	if (safePassEnter === "123"){
		alert("how tf you know??");
		document.getElementById("pPass").style.color = "#76c893";
		var safePassCorret=document.getElementById("safeSecret").innerHTML = "Sth has triggered";
	} else {
		alert("Wrong"); 
		safeClear();
	}
}

function openIndex(){
	var indexWindow = window.open('/index.html', '_blank', 'width=700,height=500,left=40,top=40')
}

function changeColor(btnColor){
	switch (btnColor.style.backgroundColor){
		case "rgb(17, 138, 178)":
			btnColor.style.backgroundColor = "#ef476f";
			break;
		case "rgb(239, 71, 111)":
			btnColor.style.backgroundColor = "#ffd166";
			break;
		case "rgb(255, 209, 102)":
			btnColor.style.backgroundColor = "#06d6a0";
			break;
		case "rgb(6, 214, 160)":
			btnColor.style.backgroundColor = "#118AB2";
			break;
	}
	if(
		$("#btn1")[0].style.backgroundColor==="rgb(255, 209, 102)" 
		&& $("#btn2")[0].style.backgroundColor==="rgb(17, 138, 178)" 
		&& $("#btn3")[0].style.backgroundColor==="rgb(239, 71, 111)" 
		&& $("#btn4")[0].style.backgroundColor==="rgb(6, 214, 160)"
		) {$("#colorPadlockPara")[0].innerHTML = "Something has triggered"}

}

/*Hidden Object*/
function clearWord(ho,wordName){
	if($(ho).css("border").includes("none")){hiddenObjectCounter+=1}
	$(ho).css("background", "rgba(0, 0, 0, 0.1)");
	$(ho).css("border", "#c9184a 1px solid");
	$(wordName).hide();
}
/*--------------*/

/*-----------------Maze Trial---------------*/
$("#mazeBtn").click(function(){
	var mazePass=$("#maze").val();
	if (mazePass.includes("COMPLETEMAZE")){alert("Correct")}
	if (mazePass.includes("LETTER+1")){alert("hmmmm......what A Big pass huh?")}
	if (mazePass.includes("SXODK&H")){alert("What will it do?")}
	if (mazePass.includes("REDTOBLUE")){alert("You know what to do with this, right?:))")}
})
/* ---------------------------------------- */










/*--------Messenging-----------*/
$(".messCtn").hide();
function openName(evt, name){
    $(".messCtn").hide();
    $(name).show();
    $(".profileBtn").removeClass("active")
}
$(".profileBtn").click(function(){
    $(this).addClass("active")
})

$(document).mouseup(function(e){
    var container = $(".chatBox");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});
/*---------------------Messing Zone----------------------*/
$(".profileBtn").hide();
$(".chating button").hide();
var messCounter=0;

	// Self Talking
	/* Template: setTimeout(function(){alert("")}, 600);  */
	/* 
	setTimeout(function(){alert("B???n ??ang v??o trang web c???a BrainOn Corp");}, 600);
	setTimeout(function(){alert("B???n c???m th???y l???")}, 600); 
	setTimeout(function(){alert("B???n v???a ????ng k?? th??? nghi???m cho b??i test UQui c???a BrainOn Corp")}, 600);
	 */
	

	// ioka Messages
	var ioka = $("#ioka .messages");
setTimeout(function(){
$(".profileBtn.ioka").show();
			ioka.append("<p class='left'>Ch??o m???ng, uh......b???n ?????n ????y cho b??i th??? nghi???m h????</p>");
$(".a1").show();
			/* alert("You have new messages"); */}, 1000)
$(".chating button").click(function(){
	/* Template: 
setTimeout(function(){
			ioka.append("<p class='left'></p>");
$('.messages').scrollTop(1000000)}, 2000) */
var btnText = $(this).text();
ioka.append(`<p class='right'>${btnText}</p>`)
$(this).hide();
messCounter+=1;

if(messCounter==1){
setTimeout(function(){
			ioka.append("<p class='left'>B???n ???? t??m hi???u b??i test n??y tr?????c ???? ch??a?</p>");
$(".a2").show()
$('.messages').scrollTop(1000000);}, 1500)}

if(messCounter==2){
setTimeout(function(){
			ioka.append("<p class='left'>V???y sao b???n ????ng k???</p>");
$(".a3").show()
$('.messages').scrollTop(1000000);}, 1500)}

if(messCounter==3){
setTimeout(function(){
			ioka.append("<p class='left'>Ah...b??i test UQui l?? 1 b??i test kh??? n??ng suy lu???n c???a n??o b???, bao g???m 1 lo???t c??c h??nh ?????ng t????ng t??c ????i h???i s??? t??m hi???u, suy lu???n c???a b???n. </p>");
$('.messages').scrollTop(1000000)}, 2000)
setTimeout(function(){
			alert("B???n c???m th???y h??o h???ng.");}, 8000)
setTimeout(function(){
			ioka.append("<p class='left'>V?? ????y m???i ch??? l?? th??? nghi???m n??n n?? v???n c??n 1 s??? l???i t???n t???i n??n to??n b??? bu???i test ch??? c?? t??nh ch???t tham kh???o. Cu???i bu???i test b???n s??? c?? m???t ph???n qu??.</p>");
$('.messages').scrollTop(1000000)}, 12000)
setTimeout(function(){
			alert("B???n c??ng c???m th???y h??o h???ng h??n.")
$('.messages').scrollTop(1000000)}, 18000)
setTimeout(function(){
			ioka.append("<p class='left'>T??i s??? l?? tr??? l?? c???a b???n. Nh??ng do m???i ch??? l?? th??? nghi???m n??n trong q??a tr??nh b???n l??m b??i test, t??i kh??ng th??? gi??p ???????c g?? nhi???u</p>");
$('.messages').scrollTop(1000000)
$(".a4").show()}, 22000)}

if(messCounter==4){
setTimeout(function(){
			ioka.append("<p class='left'>????ng v???y, n??n t??i m???i kh?? l??? r???ng t???i sao b???n l???i bi???t ?????n b??i test n??y.</p>");
$('.messages').scrollTop(1000000)
$(".a5").show()}, 2000)}

if(messCounter==5){
setTimeout(function(){
			ioka.append("<p class='left'>L??? nh???, h??? th???ng c???a t??i kh??ng ghi nh???n b???t k?? d??? li???u n??o v??? ng?????i test tr?????c c???.</p>");
$('.messages').scrollTop(1000000)}, 2000)}
setTimeout(function(){
			alert("B???n c???m th???y l??? v?? nghi ng???");
$('.messages').scrollTop(1000000)}, 6000)
setTimeout(function(){
			ioka.append("<p class='left'>Nh??ng th??i, b???n c??? l??m b??i test n??y ??i v?? h??y coi m??nh nh?? 1 ng?????i th??? nghi???m v???y.</p>");
$('.messages').scrollTop(1000000)}, 9000)
setTimeout(function(){
			alert("B???n k?? ns j \nB???n l??m b??i test")
$('.messages').scrollTop(1000000)}, 2000)
})
	
	// Loka Messages
/*-------------------------------------------------------*/


