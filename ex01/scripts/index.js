window.onload = function () {
  var elem = document.querySelector(".gallery");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".gallery-element",
    columnWidth: 200,
    gutter: 10,
  });
};

// Modal popup

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
// Get the modal
var modal1 = document.getElementById("myModal-img1");
// Get the button that opens the modal
var pageLinkImg1 = document.getElementById("page-title-img1");
// When the user clicks the button, open the modal
pageLinkImg1.onclick = function () {
  modal1.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
  console.log(modal1);
};

// Get the modal
var span2 = document.getElementById("close2");
var modal2 = document.getElementById("myModal-img2");
// Get the button that opens the modal
var pageLinkImg2 = document.getElementById("page-title-img2");
// When the user clicks the button, open the modal
pageLinkImg2.onclick = function () {
  modal2.style.display = "block";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
  console.log(modal2);
};

// Get the modal
var span3 = document.getElementById("close3");
var modal3 = document.getElementById("myModal-img3");
// Get the button that opens the modal
var pageLinkImg3 = document.getElementById("page-title-img3");
// When the user clicks the button, open the modal
pageLinkImg3.onclick = function () {
  modal3.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

// Get the modal
var span4 = document.getElementById("close4");
var modal4 = document.getElementById("myModal-img4");
// Get the button that opens the modal
var pageLinkImg4 = document.getElementById("page-title-img4");
// When the user clicks the button, open the modal
pageLinkImg4.onclick = function () {
  modal4.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
};

// Get the modal
var span5 = document.getElementById("close5");
var modal5 = document.getElementById("myModal-img5");
// Get the button that opens the modal
var pageLinkImg5 = document.getElementById("page-title-img5");
// When the user clicks the button, open the modal
pageLinkImg5.onclick = function () {
  modal5.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span5.onclick = function () {
  modal5.style.display = "none";
};

// Get the modal
var span6 = document.getElementById("close6");
var modal6 = document.getElementById("myModal-img6");
// Get the button that opens the modal
var pageLinkImg6 = document.getElementById("page-title-img6");
// When the user clicks the button, open the modal
pageLinkImg6.onclick = function () {
  modal6.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span6.onclick = function () {
  modal6.style.display = "none";
};

// Get the modal
var span7 = document.getElementById("close7");
var modal7 = document.getElementById("myModal-img7");
// Get the button that opens the modal
var pageLinkImg7 = document.getElementById("page-title-img7");
// When the user clicks the button, open the modal
pageLinkImg7.onclick = function () {
  modal7.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span7.onclick = function () {
  modal7.style.display = "none";
};

// Get the modal
var span8 = document.getElementById("close8");
var modal8 = document.getElementById("myModal-img8");
// Get the button that opens the modal
var pageLinkImg8 = document.getElementById("page-title-img8");
// When the user clicks the button, open the modal
pageLinkImg8.onclick = function () {
  modal8.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span8.onclick = function () {
  modal8.style.display = "none";
};

// Get the modal
var span9 = document.getElementById("close9");
var modal9 = document.getElementById("myModal-img9");
// Get the button that opens the modal
var pageLinkImg9 = document.getElementById("page-title-img9");
// When the user clicks the button, open the modal
pageLinkImg9.onclick = function () {
  modal9.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span9.onclick = function () {
  modal9.style.display = "none";
};

// Get the modal
var span10 = document.getElementById("close10");
var modal10 = document.getElementById("myModal-img10");
// Get the button that opens the modal
var pageLinkImg10 = document.getElementById("page-title-img10");
// When the user clicks the button, open the modal
pageLinkImg10.onclick = function () {
  modal10.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span10.onclick = function () {
  modal10.style.display = "none";
};

// var modalLinks = document.querySelectorAll(".link-page");

// modalLinks.forEach((el) =>
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     console.log(e.target.id);
//   })
// );

// document.getElementById("link").onclick = function(e) {
//   e.preventDefault();
//   document.getElementById("popupdarkbg").style.display = "block";
//   document.getElementById("popup").style.display = "block";
//   document.getElementById('popupiframe').src = "http://example.com";
//   document.getElementById('popupdarkbg').onclick = function() {
//       document.getElementById("popup").style.display = "none";
//       document.getElementById("popupdarkbg").style.display = "none";
//   };
//   return false;
