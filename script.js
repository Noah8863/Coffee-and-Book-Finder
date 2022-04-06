
//Few Things we need to add:
// --------------- //
//Create a function that clears the local storage of the button we created
//If we have time, add a more precise search method when calling the API


//linking the variables to the HTML and calling them
var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
searchBtn.addEventListener('click', findBooks)

//API Variables that we need
var APIKeyForBook = '' //None needed actually!
var geoLocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
var APIKeyForLocation = 'AIzaSyCMM-QjO6MtXBAjeVDkgyN48Zdx3SYA1_E'


function findBooks(){
    //Isolating and calling the URL in chunks so we can easily manipulate the output later in the code
    const bookUrl = 'http://openlibrary.org/search'
    const searchBooks = searchInput.value
    var newUrl = bookUrl + '.json' + '?title=' + searchBooks + '&limit=1'
    console.log(newUrl)

    fetch (newUrl)
    .then(function (response){
        if (!response.ok){
            throw response.json()
        }

        return response.json()
    })
    .then (function (response) {
        //Making sure the fetch went through with the proper call
        console.log(response)
        
        //Getting the data we need for each topic
        //We can add more data if its looking bare
        var authorNameElement = 'Authors Name: ' + response.docs[0].author_name[0]
        var nameOfBookElement = 'Book Found Was: ' + response.docs[0].title
        var charactersElement = 'Main Character: ' + response.docs[0].person[0]
        var locationElement = 'Location: ' + response.docs[0].place[0]
        var timeElement = 'Time Taken Place In: ' + response.docs[0].time

        //Grabbing the proper elements from HTML
        const authorName = document.getElementById('authorName')
        const nameOfBook = document.getElementById('bookTitle')
        const characters = document.getElementById('characters')
        const location = document.getElementById('Location')
        const time = document.getElementById('time')
        
        //Over riding the text with the new data from the API
        authorName.innerHTML = authorNameElement
        nameOfBook.innerHTML = nameOfBookElement
        characters.innerHTML = charactersElement
        location.innerHTML = locationElement
        time.innerHTML = timeElement

        //call the function to execute the code that creates a button
        moreInfo()

        //The function below works but when you search for multiple books back to back
        //The old button that was created stays there. So we need to figure out a local storage system
        //and clear() that local storage once the uses searched for a new book
        //add eventlistener and create a new function for that
        
        function moreInfo(){
            //Creating a button that will take the user to the Open Library page for that particular book:
            
            var bookResultContainer = document.getElementById('results')
            var findMoreBtn = document.createElement('button')
            var node = document.createTextNode('Find More about: ' + searchInput.value + ' Here!')
            
            //Use this class list for styling in CSS
            findMoreBtn.classList.add('findMoreBtn')
            
            findMoreBtn.appendChild(node)
            bookResultContainer.appendChild(findMoreBtn)
        }
    })
}