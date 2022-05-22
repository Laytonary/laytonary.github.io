/*function openName(evt, name){
    var profileBtn = document.getElementsByClassName("profileBtn");
    var profNav = document.getElementsByClassName("profNav");
    var chating = document.getElementsByClassName("chating");
    var messBox = document.getElementsByClassName("messBox");
    var tab
    var i;
    for(i=0; i < profNav.length; i++){
        profNav[i].style.display = "none";
        chating[i].style.display = "none";
        messBox[i].style.display = "none";
    }
    for(i=0; i < profileBtn.length; i++){
        profileBtn[i].className = profileBtn[i].className.replace(" online", "");
    }
    evt.currentTarget.className += " online";
    document.getElementById(name).style.display = "flex";
}*/
$(".messages").scrollTop($(".messages").height());
$(".ctn").ready().hide();

function openName(evt, name){
    $(".ctn").hide();
    $(name).show();
    $(".profileBtn").css('background-color','white')
}
$(".profileBtn").click(function(){
    $(this).css('background-color','red')
})