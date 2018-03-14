/*global $*/
var i = 0;
var x = 0;
var a = [1,2,3,4,5,6,7,8,9,0];
var b = [1,2,3,4,5,6,7,8,9,0];
$("#one").click(function(){
    if(x >= a[0]){
        i = b[0];
        $("#numtwo").text(b[0]);
    }else{
        $("#numone").text(a[0]);
        x = a[0];
    }
});
$("#two").click(function(){
    if(x >= a[0]){
        i = b[1];
        $("#numtwo").text(b[1]);
    }else{
        $("#numone").text(a[1]);
        x = a[1];
    }
});
$("#three").click(function(){
    if(x>= a[0]){
        i = b[2];
        $("#numtwo").text(b[2]);
    }else{
        $("#numone").text(a[2]);
        x = a[2];
    }
});
$("#four").click(function(){
    if(x >= a[0]){
        i = b[3];
        $("#numtwo").text(b[3]);
    }else{
        $("#numone").text(a[3]);
        x = a[3];
    }
});
$("#five").click(function(){
    if(x >= a[0]){
        i = b[4];
        $("#numtwo").text(b[4]);
    }else{
        $("#numone").text(a[4]);
        x = a[4];
    }
});
$("#six").click(function(){
   if(x >= a[0]){
        i = b[5];
        $("#numtwo").text(b[5]);
    }else{
        $("#numone").text(a[5]);
        x = a[5];
    }
});
$("#seven").click(function(){
   if(x >= a[0]){
        i = b[6];
        $("#numtwo").text(b[6]);
    }else{
        $("#numone").text(a[6]);
        x = a[6];
    }
});
$("#eight").click(function(){
    if(x >= a[0]){
        i = b[7];
        $("#numtwo").text(b[7]);
    }else{
        $("#numone").text(a[7]);
        x = a[7];
    }
});
$("#nine").click(function(){
    if(x >= a[0]){
        i = b[8];
        $("#numtwo").text(b[8]);
    }else{
        $("#numone").text(a[8]);
        x = a[8];
    }
});
$("#zero").click(function(){
   if(x >= a[0]){
        i = b[9];
        $("#numtwo").text(b[9]);
    }else{
        $("#numone").text(a[9]);
        x = a[9];
    }
});
$("#plus").click(function(){
    $("#mathsign").text("+");
});
$("#equals").click(function(){
    $("p").text(x + i);
});
