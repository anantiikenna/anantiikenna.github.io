let view1 = document.getElementById('view1');
let vImage1 = document.getElementById('vimage1');
var Img1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");


// Get the <closeX> element that closes the modal
let closeX = document.getElementsByClassName("close")[0];

// When the user clicks on <closeX> (x), close the modal

// Event listener to close the modal if clicking outside of it

let call = () => {
 view1.onclick = function(){
      vImage1.style.display = "block";
      captionText1.innerHTML = Img1.alt;
    }

    closeX.onclick = function() { 
      vImage1.style.display = "none";
  }

  document.body.addEventListener("click", function(event){
    if (!event.target.closest('#vimage1') && event.target !== view1) {
      vImage1.style.display = "none";
    }
  });
}

call();

/*
view1.onclick = function(){
  vImage1.style.display = "block";
  captionText1.innerHTML = Img1.alt;
}

// When the user clicks on <closeX> (x), close the modal
closeX.onclick = function() { 
    vImage1.style.display = "none";
}


// Event listener to close the modal if clicking outside of it
document.addEventListener("click", function(event){
  if (vImage1.style.display === "block" &&!event.target.closest('#vimage1') && event.target !== view1) {
    vImage1.style.display = "none";
  }
});
*/