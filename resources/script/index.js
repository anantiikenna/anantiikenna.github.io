let view1 = document.getElementById('view1');
let view2 = document.getElementById('view2');
let view3 = document.getElementById('view3');
let view4 = document.getElementById('view4');
let vImage1 = document.getElementById('vimage1');
let vImage2 = document.getElementById('vimage2');
let vImage3 = document.getElementById('vimage3');
let vImage4 = document.getElementById('vimage4');
let img1 = document.getElementById("img01");
let img2 = document.getElementById("img02");
let img3 = document.getElementById("img03");
let img4 = document.getElementById("img04");
let captionText1 = document.getElementById("caption1");
let captionText2 = document.getElementById("caption2");
let captionText3 = document.getElementById("caption3");
let captionText4 = document.getElementById("caption4");

// Get the <closeX> element that closes the modal
let closeX1 = document.getElementsByClassName("close")[0];
let closeX2 = document.getElementsByClassName("close")[1];
let closeX3 = document.getElementsByClassName("close")[2];
let closeX4 = document.getElementsByClassName("close")[3];

// Setting up the Array of each needed element
let viewArray = [view1, view2, view3, view4];
let vImgArray = [vImage1, vImage2, vImage3, vImage4];
let imgArray = [img1, img2, img3, img4];
let captionTextArray = [captionText1, captionText2, captionText3, captionText4];
let closeXArray = [closeX1, closeX2, closeX3, closeX4];

// Creating a function that executes each Click element.
let call = () => {
  for(let j = 0; j < viewArray.length; j++ ){
    viewArray[j].onclick = function(){
      vImgArray[j].style.display = "block";
      captionTextArray[j].innerHTML = imgArray[j].alt;
    }
    closeXArray[j].onclick = function() {
      vImgArray[j].style.display = "none";
    }
  }
 
  window.addEventListener('mouseup', function(event){
    for(let i = 0; i < vImgArray.length; i++){
     if ( event.target !== viewArray[i] && event.target !== imgArray[i]) {
      vImgArray[i].style.display = "none";
     }
    }
  });
}


 call();
