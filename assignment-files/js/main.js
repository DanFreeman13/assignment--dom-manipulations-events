// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

var navMenu = document.querySelector('.nav-menu')
var navMenA = document.querySelectorAll('.nav-menu a')
var btnToggleMenu = document.querySelector('.btn-toggle-menu')
var counter = 0;

btnToggleMenu.addEventListener('click', function (event) {

  if (counter%2 !== 0) {
    event.target.style.border = "1.25px solid rgb(51, 51, 51)";
    navMenu.style.opacity = 1;
    navMenA.forEach(function(elem) {
      elem.style.display = "inline-block";
    });
    counter++;

  } else {
    event.target.style.borderTop = "3px solid black";
    navMenu.style.opacity = 0;
    navMenA.forEach(function(elem) {
      elem.style.display = "none";
    });
    navMenu.style.height = "50px";
    counter++;
  }
})



/* TASK 2 -- Select/Deslect an Icon */

var icons = document.querySelectorAll(".wish-list .option");

 icons.forEach(function(icon){
  icon.addEventListener('click',function(event){
    var current = event.currentTarget;
      current.classList.toggle('selected');
 })
})

/* TASK 3 -- Increase total number*/

var buttons = document.querySelectorAll('.add-points .point');
var result = document.querySelector('.total-points');

buttons.forEach(function (button) {
  button.addEventListener('click', function(event){

    var btn = event.target;
    var value = btn.textContent;

    var original = result.textContent;
    var newValue = (original*1) + (value*1);
    result.textContent = newValue;
  })
})


/* TASK 4 (Adventure Mode)-- Move Item List to List */

var genLiList = document.querySelectorAll('.individual');
var node1 = document.querySelector('.good-standing-list');
var node2 = document.querySelector('.probation-list');

genLiList.forEach(function (lis) {
  lis.addEventListener('click', function() {

    if (lis.parentNode.className === "good-standing-list") {
      node2.appendChild(lis);
      node1.removeChild(lis);
    }

    if (lis.parentNode.className === "probation-list") {
      node1.appendChild(lis);
      node2.removeChild(lis);
    }

  })
})

/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */

var colorSquares = document.querySelectorAll('.palette span');
var rectangle = document.querySelector('.msg');

colorSquares.forEach(function (colorcito) {
  colorcito.addEventListener('click', function(event){

    var theColoris = event.target.attributes.class.textContent;

    rectangle.attributes.class.textContent = "msg " + theColoris;

  });
});
