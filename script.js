//Few Things we need to add:
// --------------- //
//Create a function that clears the local storage of the button we created
//If we have time, add a more precise search method when calling the API

//linking the variables to the HTML and calling them

var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
var bookResultContainer = document.getElementById('results')
searchBtn.addEventListener('click', findBooks)

var cityInput = document.getElementById('cityInput')
var apiKeyForCity = '&appid=05477151a72eb8675c1e912165d66a19'

//API Variables that we need
var APIKeyForBook = '' //None needed actually!
var geoLocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
var APIKeyForLocation = 'AIzaSyCMM-QjO6MtXBAjeVDkgyN48Zdx3SYA1_E'
var APIKeyForMaps = 'AIzaSyAxVPPRJ_4mR6mArRe0CYCBkvi20z6zFCc'

function findingCity(){
    var city = cityInput.value
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + apiKeyForCity
    console.log(url)

    fetch (url)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
    }
  
        return response.json();
      })
  
    .then(function (response) {
        
        var lat = response.city.coord.lat
        var lon = response.city.coord.lon

        var newURL = 'https://api.openweathermap.org/data/2.5/forecast?' + 'lat=' + lat + '&lon=' + lon + '&appid=05477151a72eb8675c1e912165d66a19'
        
        console.log(newURL)
        console.log('City Fetch is working!')

        initialize()
        var map;
        var service;
        var infowindow;

            function initialize() {
            var pyrmont = new google.maps.LatLng(lat, lon);

            map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
            });

            var request = {
            location: pyrmont,
            radius: '500', //radius in metres
            type: ['coffee shops']
            };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                    }
                }
            }
        })
}

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

        addInfoBtn()

        //Function works but we still need to clear the button of the data so if we do another 
        //search it doesn't keep the old value
        //.clear() or refresh page function?
        //we can also get rid of this function if we can't figure it out
        function addInfoBtn (){
            var bookBtn = document.getElementById('bookBtn')
            bookBtn.classList.remove('hide')

            //You can change the 'button' class to whatever else for easier styling
            bookBtn.classList.add('button') 

            newBookText = document.createTextNode('Find More About: ' + searchInput.value + ' Here!')
            bookBtn.appendChild(newBookText)
            bookResultContainer.appendChild(bookBtn)
            searchBtn.addEventListener('click', clearFunction)
            
            document.getElementById("bookBtn").onclick = function () {
                location.href = 'http://openlibrary.org/search?title=' + searchInput.value + '&limit=1'
                
            };

        }
        //call the function to execute the code that creates a button
        function clearFunction (){
            bookBtn.clear()
        }
    })
}

//Making our recommendations for our users
//And of course this is 100% calculated with what the user picks to read!
const recommendations = document.getElementById('recommendations')
const members = ['Noah', 'Bryan', 'Cynthia']
const randomMember = Math.floor(Math.random() * members.length);
var pickedMember = (members[randomMember]);
console.log(pickedMember)

if (pickedMember == 'Noah'){
    const NoahsDrinks = ['Nitro Cold Brew', 'Vanilla Latte', 'Iced Caramel Macchiato', 'Caramel Frappuccino', 'Nitro Cold Brew WITH Vanilla Sweet Cream']
    const NoahsFoods = ['Bagel with Cream Cheese', 'Banana Bread', 'Pumpkin Bread', 'Bacon, Gouda & Egg Sandwich','Double-Smoked Bacon, Cheddar & Egg Sandwich']
    const randomDrinkForNoah = Math.floor(Math.random() * NoahsDrinks.length)
    const randomFoodForNoah = Math.floor(Math.random() * NoahsFoods.length)
    var pickedDrinkForNoah = (NoahsDrinks[randomDrinkForNoah])
    var pickedFoodForNoah = (NoahsFoods[randomFoodForNoah])
    console.log(pickedDrinkForNoah)
    console.log(pickedFoodForNoah)
    recommendations.innerHTML = 'Noah recommends to drink a ' + pickedDrinkForNoah + ' and a ' + pickedFoodForNoah + ' to eat with this book'
}
if (pickedMember == 'Cynthia'){
    const CynthiasDrinks = ['Matcha Green Tea Latte', 'Vanilla Iced Latte', 'Carmel Macchiatto', 'Double Espresso', 'Peach Tea']
    const CynthiasFoods = ['Donut', 'Lemon Cake', 'Spinach Egg Bite','Cheese Danish','Croissant']
    const randomDrinkForCynthia = Math.floor(Math.random() * CynthiasDrinks.length)
    const randomFoodForCynthia = Math.floor(Math.random() * CynthiasFoods.length)
    var pickedDrinkForCynthia = (CynthiasDrinks[randomDrinkForCynthia])
    var pickedFoodForCynthia = (CynthiasFoods[randomFoodForCynthia])
    console.log(pickedDrinkForCynthia)
    console.log(pickedFoodForCynthia)
    recommendations.innerHTML = 'Cynthia recommends to drink a ' + pickedDrinkForCynthia + ' and a ' + pickedFoodForCynthia + ' to eat with this book'
}
if (pickedMember == 'Bryan'){
    const BryansDrinks = ['Iced Coffee with TWO sugars & THREE Creamers', 'Cold Brew', "'Frappacino Icey Type Thing'", 'Water', "'Nothing'"]
    const BryansFoods = ["'Spinach, Feta Wrap Thingy'", 'Bagel with Cream Cheese', 'Cake Pops', 'Ham & Swiss Croissant', 'Bowl Of Cereal']
    const randomDrinkForBryan = Math.floor(Math.random() * BryansDrinks.length)
    const randomFoodForBryan = Math.floor(Math.random() * BryansFoods.length)
    var pickedDrinkForBryan = (BryansDrinks[randomDrinkForBryan])
    var pickedFoodForBryan = (BryansFoods[randomFoodForBryan])
    console.log(pickedFoodForBryan)
    console.log(pickedDrinkForBryan)
    recommendations.innerHTML = 'Bryan recommends to drink a ' + pickedDrinkForBryan + ' and a ' + pickedFoodForBryan + ' to eat with this book'
  
}
