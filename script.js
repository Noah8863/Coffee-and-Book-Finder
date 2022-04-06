//Variables for HTML Elements
var newEvent = document.getElementById('createBtn')
var placeholder1El = document.getElementById('placeholder1')
var placeholder2El = document.getElementById('placeholder2')
var placeholder3El = document.getElementById('placeholder3')
var placeholder4El = document.getElementById('placeholder4')
var searchBtnEl = document.getElementById('searchBtn')
var createBtnEl = document.getElementById('createBtn')
var dropDownEl = document.getElementById('dropDownContainer')
newEvent.addEventListener('click', bookData)

function bookData (){
    myFunction()
    //Kind of messy with how this works but at least its something
    //Just need something to work with for the API side of things
    placeholder1El.classList.add('hide')
    placeholder2El.classList.add('hide')
    placeholder3El.classList.add('hide')
    placeholder4El.classList.add('hide')
    searchBtnEl.classList.add('hide')
    createBtnEl.classList.add('hide')
    dropDownEl.classList.remove('hide')
    fetch ('http://openlibrary.org/works/OL27258W/editions.json')
    .then(response => response.json())
    .then(data => console.log(data));

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }