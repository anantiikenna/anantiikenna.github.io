let view1 = document.getElementById('view1');
let view2 = document.getElementById('view2');
let view3 = document.getElementById('view3');
let view4 = document.getElementById('view4');
let view5 = document.getElementById('view5');
let view6 = document.getElementById('view6');
let vImage1 = document.getElementById('vimage1');
let vImage2 = document.getElementById('vimage2');
let vImage3 = document.getElementById('vimage3');
let vImage4 = document.getElementById('vimage4');
let vImage5 = document.getElementById('vimage5');
let vImage6 = document.getElementById('vimage6');
let img1 = document.getElementById("img01");
let img2 = document.getElementById("img02");
let img3 = document.getElementById("img03");
let img4 = document.getElementById("img04");
let img5 = document.getElementById("img05");
let img6 = document.getElementById("img06");
let captionText1 = document.getElementById("caption1");
let captionText2 = document.getElementById("caption2");
let captionText3 = document.getElementById("caption3");
let captionText4 = document.getElementById("caption4");
let captionText5 = document.getElementById("caption5");
let captionText6 = document.getElementById("caption6");

// Get the <closeX> element that closes the modal
let closeX1 = document.getElementsByClassName("close")[0];
let closeX2 = document.getElementsByClassName("close")[1];
let closeX3 = document.getElementsByClassName("close")[2];
let closeX4 = document.getElementsByClassName("close")[3];
let closeX5 = document.getElementsByClassName("close")[4];
let closeX6 = document.getElementsByClassName("close")[5];

// Setting up the Array of each needed element
let viewArray = [view1, view2, view3, view4, view5, view6];
let vImgArray = [vImage1, vImage2, vImage3, vImage4, vImage5, vImage6];
let imgArray = [img1, img2, img3, img4, img5, img6];
let captionTextArray = [captionText1, captionText2, captionText3, captionText4, captionText5, captionText6];
let closeXArray = [closeX1, closeX2, closeX3, closeX4, closeX5, closeX6];

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
