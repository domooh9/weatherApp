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