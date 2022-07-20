
var btn1 = $(".btn")[0];
var btn2 = $(".btn")[1];
var btn3 = $(".btn")[2];



var door1 = $(".door-front")[0];
var door2 = $(".door-front")[1];
var door3 = $(".door-front")[2];

var doorback1 = $(".door-back")[0];
var doorback2 = $(".door-back")[1];
var doorback3 = $(".door-back")[2];
var myarray= new Array(doorback1, doorback2, doorback3);
var i = Math.floor(Math.random() * myarray.length);
var random = myarray[i];

var myarray2= new Array(door1, door2, door3);

$(random).css("background-image", "url('car.png')");


    
    

function rotate1(button, door) {
 if (random == myarray[1]) {random2 = myarray2[2]}
 // if the random car door is in door 2 then open door 3
 if (random == myarray[2]) {random2 = myarray2[1]}
  $(random2).css("transition", "transform 1s")
  .css("transform-origin", "0% 50%")
  .css("transform", "rotateY(-140deg)");

  $(".btn1").attr("onclick", "rotateRest(btn1, door1)");
  $(".btn2").attr("onclick", "rotateRest(btn2, door2)");
  $(".btn3").attr("onclick", "rotateRest(btn3, door3)");
};

function rotate2(button, door) {
 if (random == myarray[0]) {random2 = myarray2[2]}
 if (random == myarray[2]) {random2 = myarray2[0]}
  $(random2).css("transition", "transform 1s")
  .css("transform-origin", "0% 50%")
  .css("transform", "rotateY(-140deg)");

  $(".btn1").attr("onclick", "rotateRest(btn1, door1)");
  $(".btn2").attr("onclick", "rotateRest(btn2, door2)");
  $(".btn3").attr("onclick", "rotateRest(btn3, door3)");
};
function rotate3(button, door) {
 if (random == myarray[1]) {random2 = myarray2[0]}
 if (random == myarray[0]) {random2 = myarray2[1]}
  $(random2).css("transition", "transform 1s")
  .css("transform-origin", "0% 50%")
  .css("transform", "rotateY(-140deg)");

  $(".btn1").attr("onclick", "rotateRest(btn1, door1)");
  $(".btn2").attr("onclick", "rotateRest(btn2, door2)");
  $(".btn3").attr("onclick", "rotateRest(btn3, door3)");
};

function rotateRest(button, door) {
  $(door).css("transition", "transform 1s")
  .css("transform-origin", "0% 50%")
  .css("transform", "rotateY(-140deg)");

};

function refreshPage(){
  window.location.reload();
} 