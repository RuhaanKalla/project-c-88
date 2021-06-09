var canvas = new fabric.Canvas('mycanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;
player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
         top:player_y,
         left:player_x
        });
        canvas.add(player_object);
         });
        }
    
 function new_Image(get_image){
  fabric.Image.fromURL(get_image , function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
      top:player_y,
      left:player_x
                });
      canvas.add(block_image_object);
                 });
         }
         window.addEventListener("keydown" , my_keydown);

  function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey && keypressed == "80"){
      console.log("p plus shift key pressed");
      block_image_height = block_image_height + 10;
      block_image_width = block_image_width + 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keypressed == "77"){
      console.log("m minus shift key pressed");
      block_image_height = block_image_height - 10;
      block_image_width = block_image_width - 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keypressed == "37"){
      left();
      console.log("left");

    }
    if(keypressed == "39"){
      right();
      console.log("right");
      
    }
    if(keypressed == "38"){
     up();
      console.log("up");
      
    }
    if(keypressed == "40"){
      down();
      console.log("down");
      
    }
    if(keypressed == "70"){
      new_Image("spiderman_face.png");
      console.log("f");
    }
    if(keypressed == "66"){
      new_Image("hulkd_body.png");
      console.log("b");
    }
    if(keypressed == "76"){
      new_Image("ironman_legs.png");
      console.log("l");
    }
    if(keypressed == "82"){
      new_Image("thor_right_hand.png");
      console.log("r");
    }
    if(keypressed == "72"){
      new_Image("captain_america_left_hand.png");
      console.log("h");
    }
    
  }
  function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        console.log("block image height" + block_image_height);
        console.log("player x" + player_x + "player y" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
   if(player_y<=550){
       player_y = player_y + block_image_height;
       console.log("block image height" + block_image_height);
       console.log("player x" + player_x + "player y" + player_y);
       canvas.remove(player_object);
       player_update();
   }
}
function left(){
   if(player_x>=0){
       player_x = player_x - block_image_width;
       console.log("block image height" + block_image_height);
       console.log("player x" + player_x + "player y" + player_y);
       canvas.remove(player_object);
       player_update();
   }
}
function right(){
   if(player_x<=920){
       player_x = player_x + block_image_height;
       console.log("block image height" + block_image_height);
       console.log("player x" + player_x + "player y" + player_y);
       canvas.remove(player_object);
       player_update();
   }
}