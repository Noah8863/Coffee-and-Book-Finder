var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')

var APIKeyForBook = '' //None needed actually!

var geoLocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
var APIKeyForLocation = 'AIzaSyCMM-QjO6MtXBAjeVDkgyN48Zdx3SYA1_E'


searchBtn.addEventListener('click', findBooks)

//API for finding the books

//Few Things we need to add:
// --------------- //
//Adding the input into an array so we can add '+' in between words if need be
//Limit the amount of results coming in
function findBooks(){


    const bookUrl = 'http://openlibrary.org/search.json?title='
    const searchBooks = searchInput.value
    var newUrl = bookUrl + searchBooks
    console.log(newUrl)


    fetch (newUrl)
    .then(function (response){
        if (!response.ok){
            throw response.json()
        }

        return response.json()
    })
    .then (function (response) {
        //code for injecting HTML goes Here
        //Need to figure out how tf we are going to sort through all this data
        console.log(response)
    })
}