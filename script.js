<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f

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
<<<<<<< HEAD
=======
var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
//Change these variables once the merge conflict is all good to go

var APIKeyForBook = '' //None needed actually!

>>>>>>> ee2c0ba589f062678291e02fff0e09c2ee6ad7ed
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f
var geoLocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
var APIKeyForLocation = 'AIzaSyCMM-QjO6MtXBAjeVDkgyN48Zdx3SYA1_E'


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f
function findBooks(){
    //Isolating and calling the URL in chunks so we can easily manipulate the output later in the code
    const bookUrl = 'http://openlibrary.org/search'
    const searchBooks = searchInput.value
    var newUrl = bookUrl + '.json' + '?title=' + searchBooks + '&limit=1'
    console.log(newUrl)

<<<<<<< HEAD
=======
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


>>>>>>> ee2c0ba589f062678291e02fff0e09c2ee6ad7ed
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f
    fetch (newUrl)
    .then(function (response){
        if (!response.ok){
            throw response.json()
        }

        return response.json()
    })
    .then (function (response) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f
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
<<<<<<< HEAD
=======
        //code for injecting HTML goes Here
        //Need to figure out how tf we are going to sort through all this data
        console.log(response)
        var authorNameElement = 'Authors Name: ' + response.docs[0].author_name[0]
        var nameOfBookElement = 'Book Found Was: ' + response.docs[0].title

        const authorName = document.getElementById('idGoesHere')
        const nameOfBook = document.getElementById('newIdGoesHere')

        authorName.innerHTML = authorNameElement
        nameOfBook.innerHTML = nameOfBookElement
>>>>>>> ee2c0ba589f062678291e02fff0e09c2ee6ad7ed
=======
>>>>>>> adf0e6288984269439f4969219d6b4106c93fe1f
    })
}