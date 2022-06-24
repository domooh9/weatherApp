//getting data from API using fetch and the API key
let weather={
    apiKey : "3f256d8cb4049455f90447afed2ea8e2",
    fetchWeather: function (city){
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + 
    this.apiKey)
    
    //requesting for a response from the API server
    .then((response)=> response.json())
    .then((data) => this.displayWeather(data));
    },
    //declaring data from the API
displayWeather: function(data)
{
const { name } = data;
const { icon, description } = data.weather[0];
const { temp, humidity } = data.main;
const { speed } = data.wind;
//using data from the API to manipulate the innerText of HTML
document.querySelector(".city").innerText = "Weather of " + name;
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
document.querySelector(".description").innertext = description; 
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "wind speed: " + speed + "km/hr";
document.querySelector(".weather").classList.remove("loading");
},
//activating the search button to get data response from the server
search: function (){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
//adding event Listener to the search button
document.querySelector(".search button")
.addEventListener("click", function(){
 weather.search();
});
//using ENTER button to search data from the API
document.querySelector(".search-bar").addEventListener
("keyup", function(event){
    if(EventTarget.key == "Enter"){
        weather.search();
    }