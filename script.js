var newEvent = document.getElementById('button2')

newEvent.addEventListener('click', bookListed)

function bookListed (){
    fetch ('http://openlibrary.org/works/OL27258W/editions.json')
    .then(response => response.json())
    .then(data => console.log(data));
}