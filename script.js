
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


$(random).css("background-image", "url('car.png')");


function rotate(button, door) {
 
  $(door).css("transition", "transform 1s")
  .css("transform-origin", "0% 50%")
  .css("transform", "rotateY(-160deg)");
};
