var Wrap="url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKJZK82tdIUdmhZMHQFYKFHUm9u3stm8vyijQSx3Te9qEgrC7VDV0fmYw-iw')-";
Stator=$("<div>").addClass("stator");
Bottom=$("<div>").addClass("bottom");
Top=$("<div>").addClass("top");
Top.append("<p class='ptop'>Edan</p>");
Stator.append(Top);
Stator.append(Bottom);
window.onload=function(){
    var dimension=0;
    for (var i=0;i<360;i+=2.5) {
        dimension+=3.5;
        Rotor=$("<div>").addClass("rotor");
        Axis=$("<div>").addClass("axis");
        Cover=$("<div>").addClass("cover");
        Rotor.css({
            "transform":"rotateY("+i+"deg)"
        });
        Cover.css({
            "background":Wrap+dimension+"px",
            "background-size":"cover"
        });
        $(Axis).append(Cover);
        $(Rotor).append(Axis);
        $(Stator).append(Rotor);
        $("#anim").append(Stator);
    }
}