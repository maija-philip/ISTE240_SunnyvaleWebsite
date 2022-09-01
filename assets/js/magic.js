/* Slideshow js */
//Create an array of images

var home_slideshow_images = [
  "url(\"../assets/img/home/home_slideshow_1.jpg\")",
  "url(\"../assets/img/home/home_slideshow_2.jpg\")",
  "url(\"../assets/img/home/home_slideshow_3.jpg\")",
  "url(\"../assets/img/home/home_slideshow_4.jpg\")",
  "url(\"../assets/img/home/home_slideshow_5.jpg\")",
  "url(\"../assets/img/home/home_slideshow_6.jpg\")"
];

//Save total size of array to variable arraySize
var arraySize = home_slideshow_images.length;



var x = 0; //Used to count up to arraySize

//Set wait time between slides in milliseconds
setInterval(runitHome, 4000);

//Function runit play slideshow when called
function runitHome() {
    //console.log("here " + x);
    //console.log(home_slideshow_images[x]);


    //Set image to next picture in image array
    var imgSpot = document.getElementById('home');
    imgSpot.style.backgroundImage = home_slideshow_images[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }

}

/* slideshow reastaurants */
// for restaurants
var restaurant_imgs = [
  "url(\"<?php echo $path;?>assets/img/restaurants/tofu_house.jpg\")",
  "url(\"<?php echo $path;?>/assets/img/restaurants/bhavan.jpg\")",
  "url(\"<?php echo $path;?>/assets/img/restaurants/labamba.jpg\")",
  "url(\"../assets/img/restaurants/falafelstop.jpg\")",
  "url(\"../assets/img/restaurants/teaera.png\")",
  "url(\"../assets/img/restaurants/ramen.jpg\")",
  "url(\"../assets/img/restaurants/somisomi.jpg\")"
];

var restaurant_titles = [
  "So Gong dong tofu house",
  "Saravanaa bhavan",
  "Taqueria La bamba",
  "Falafel stop",
  "Tea era",
  "Ramen nagi",
  "Somisomi"
];

var restaurant_bios = [
  "Here is my favorite restaurant of all time! Bibimbap and Soft Tofu Ramen are my go-to dishes. If you have never had Korean food or if you love it, you MUST visit! If your spice tolerance is low, order Bibimbap or order with ‘no spice’.",

  "This is a wonderful vegetarian, South Indian restaurant. My favorite things to get are the Idly and Sambar (steamed rice and lentil patties with spicy soup and creamy chutneys), Masala Dosa (rice and lentil crepe with spiced potatoes and onions),  and my personal favorite is a Vegetable Uthappam (a thick rice and lentil pancake with vegetables)",

  "This has to be the number one best taqueria in Silicon Valley. They are Mexican and Salvadorian and have been through a lot, their story is actually really interesting! I’ve been going to it since I was a young kid, it has THE BEST FOOD EVER! They are currently a food truck called Paper Platez outside O’Malley’s Sports Pub",

  "This Mediterranean restaurant right next to Fremont High school (the oldest high school in Sunnyvale). It is famous for it’s delicious food — especially it’s pita bread! It’s the best I’ve ever had! — and it’s long, long lines. Try going for an early or late lunch!",

  "While your here, bubble tea is a must! Try Tea Era for some awesome milk tea and popcorn chicken. They also have bento boxes! For a fun picnic, it’s a super short walk to Serra Park. A 2 minute walk away, there is also Gong Cha if you are already around there.",

  "If you are looking for legendary ramen and are willing to stand in line, this restaurant is the place for you. It’s located in Valley Fair Mall and it’s line starts at about 10am (it opens at 11). If you are not looking to stand in line, there’s lots of other ramen restaurants in the mall and around Sunnyvale that are good (Tofu House has really good ramen).",

  "This Korean dessert place serves Ah-Boong, a fish shaped waffle cone with a filling of your choice, soft serve ice cream, and toppings. It is literally the best thing in the world. They also have Taiyaki, a fish shaped waffle cone with your choice of filling!"
];

// Save total size of array
var numRestaurants = restaurant_titles.length;
// the information current being shown
var currentSlide = 0;

// go to the next slide
function goForward() {

  //Increase count by 1
  currentSlide++;

  //If count has reached the last index of the arrays than set count back to starting index.
  if (currentSlide === numRestaurants) {
      currentSlide = 0;
  }

  changeContent();

}

// go to the previous slide
function goBack() {
  //Decrease count by 1
  currentSlide--;

  //If count has reached the last index of the arrays than set count back to starting index.
  if (currentSlide < 0) {
      currentSlide = numRestaurants - 1;
  }

  //console.log(currentSlide);
  changeContent();

}

function changeContent() {

  // get elements
  var img = document.getElementById('slideshow_img');
  var name = document.getElementById('rest_name');
  var text = document.getElementById('rest_text');

  // put the content in
  img.style.backgroundImage = restaurant_imgs[currentSlide];
  name.innerHTML = restaurant_titles[currentSlide];
  text.innerHTML = restaurant_bios[currentSlide];
}




// for about slideshow
var me_imgs = [
  "url(\"../assets/img/about/about1.jpg\")",
  "url(\"../assets/img/about/about2.jpg\")",
  "url(\"../assets/img/about/about3.jpg\")",
  "url(\"../assets/img/about/about4.jpg\")",
  "url(\"../assets/img/about/about5.jpg\")",
  "url(\"../assets/img/about/about6.jpg\")",
  "url(\"../assets/img/about/about7.jpg\")",
];


// Save total size of array
var numMePics = me_imgs.length;
// the information current being shown
var currentSlideMe = 0;

// go to the next slide
function goForwardMe() {

  //Increase count by 1
  currentSlideMe++;

  //If count has reached the last index of the arrays than set count back to starting index.
  if (currentSlideMe === numMePics) {
      currentSlideMe = 0;
  }

  var img = document.getElementById('me_slideshow_img');
  img.style.backgroundImage = me_imgs[currentSlideMe];

}

// go to the previous slide
function goBackMe() {
  //Decrease count by 1
  currentSlideMe--;

  //If count has reached the last index of the arrays than set count back to starting index.
  if (currentSlideMe < 0) {
      currentSlideMe = numMePics - 1;
  }

  //console.log(currentSlide);
  var img = document.getElementById('me_slideshow_img');
  img.style.backgroundImage = me_imgs[currentSlideMe];

}

/* form js */
// Validate the form
function validateForm() {
  "use strict";
  // produce syntax errors for me to help me debug by giving line numbers
  // it will tell you if you mispell variable

  var isValid = true;

  var name = checkName();
  if (!name) {
    isValid = name;
  }

  var date = checkDate();

  if (!date) {
    isValid = date;
  }

  var favPlace = checkFavPlace();

  if (!favPlace) {
    isValid = favPlace;
  }

  console.log("validateForm() finished");
  console.log("the forum is valid: " + isValid);
  return (isValid);

}

function checkName() {
  // check for name
  var name = document.getElementById('visitor');
  var asteriks = document.getElementsByClassName('required');
  var nameValid = true;

  if (name.value == "") {

    nameValid = false;
    console.log("Name is not valid");

    name.style.borderColor = "var(--error-red)";
    name.style.backgroundColor = "var(--error-pink)";

    asteriks[0].style.color = "var(--error-red)";

    name.focus()
    return nameValid;
  }

  return true;
}

// check to see if the date is valid
function checkDate() {
  // check for date
  var date = document.getElementById('vdate');
  var dateValid = true;

  // check if it's empty
  if (date.value == "") {

    console.log("Date is not valid");

    date.style.borderColor = "var(--error-red)";
    date.style.backgroundColor = "var(--error-pink)";

    var asteriks = document.getElementsByClassName('required');
    asteriks[1].style.color = "var(--error-red)";

    date.focus()

    dateValid = false;

  } else {
    // chacking to see if the date they put in was before the current date
    // getting current date
    var today = new Date();
    console.log("User's date: " + today);

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();


    // format todays date right
    if (dd < 10) {
      dd = '0' + dd; // in case day is one digit
    }
    if (mm < 10) {
      mm = '0' + mm; // in case month is one digit
    }

    var todayDate = "" + yyyy + "-" + mm + "-" + dd;
    var enteredDate = date.value;
    console.log("system date = " + todayDate);


    // check if entered is after current date
    if(enteredDate >= todayDate){
      // it is, so turn input red
      date.style.borderColor = "var(--error-red)";
      date.style.backgroundColor = "var(--error-pink)";

      var asteriks = document.getElementsByClassName('required');
      asteriks[1].style.color = "var(--error-red)";

      //focus on it
      date.focus()

       dateValid = false;
       console.log("date not valid");
     }

    console.log("In function to check date - dateValid is --->" + dateValid);
    return (dateValid);

  }


  return dateValid;
}


function checkFavPlace() {
  console.log("hereee");

  //get inputs
  var inputs = [
    document.getElementById('rancho'),
    document.getElementById('tofu_house'),
    document.getElementById('bay'),
    document.getElementById('murphy'),
    document.getElementById('city_center')
  ];

  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i].checked);
    if (inputs[i].checked) {
      console.log("A fav place has been selected");
      return true;
    }
  }

  // didn't find a checked box
  // change background to pink
  var labels = document.querySelectorAll("#favplace label")
  for (var i = 0; i < labels.length; i++) {
    labels[i].style.backgroundColor = "var(--error-pink)";
  }

  return false;
}



/* navigation */
var isNavOpen = false;

// a nav function i made a long time ago
function toggleNav() {
  if (window.innerWidth > 800) {
    return;
  }

  var nav = document.getElementsByTagName('NAV')[0];
  var txtDiv = document.getElementById('nav-format');
  var clsBtn = document.getElementById('close');

    if (isNavOpen) {
      nav.style.width = '0';
      txtDiv.style.display = 'none';
      clsBtn.style.display = 'none';
    } else {
      nav.style.width = '100vw';
      txtDiv.style.display = 'flex';
      clsBtn.style.display = 'block';
    }

    isNavOpen = !isNavOpen;

}

window.addEventListener("resize", fixNav);

// a fix for the nav function that i made beginnning of freshman year at rit
function fixNav() {
  var nav = document.getElementsByTagName('NAV')[0];
  var txtDiv = document.getElementById('nav-format');

  if (window.innerWidth > 800) {
    nav.style.width = '100%';
    txtDiv.style.display = 'block';

  }
  else {
    nav.style.width = '0';
    txtDiv.style.display = 'none';

  }

  var clsBtn = document.getElementById('close');
  clsBtn.style.display = "none";

}

// on mouse over img
// show new image
function showImg() {
  var imgSpot = document.getElementById('flip');
  imgSpot.style.backgroundImage = "url(\"../img/images/farmers_market/veggies2.jpg\")";
}
// change back to initial
function changeBack() {
  var imgSpot = document.getElementById('flip');
  imgSpot.style.backgroundImage = "url(\"../img/images/farmers_market/veggies.jpg\")";
}


// validate comments form
/* form js */
// Validate the form
function validateComments() {
  "use strict";
  // produce syntax errors for me to help me debug by giving line numbers
  // it will tell you if you mispell variable

  var isValid = true;

  var name = checkCommentName();
  if (!name) {
    isValid = name;
  }

  var comment = checkComment();

  if (!comment) {
    isValid = comment;
  }

  console.log("the forum is valid: " + isValid);
  return (isValid);

}

function checkCommentName() {
  // check for name
  var name = document.getElementById('nameFeild');
  var nameValid = true;

  if (name.value == "") {

    nameValid = false;
    console.log("Name is not valid");

    name.style.borderColor = "var(--error-red)";
    name.style.backgroundColor = "var(--error-pink)";


    name.focus()
    return nameValid;
  }

  return true;
}
function checkComment() {
  // check for comment
  var comment = document.getElementById('commentFeild');
  var commentValid = true;

  if (comment.value == "") {

    commentValid = false;
    console.log("Comment is not valid");

    comment.style.borderColor = "var(--error-red)";
    comment.style.backgroundColor = "var(--error-pink)";

    comment.focus()
    return commentValid;
  }

  return true;
}
