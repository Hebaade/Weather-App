let searchIcon=document.getElementById("searchIcon")
let searchInput=document.getElementById("input")
let weatherIcon=document.getElementsByClassName("weatherIcon")[0]
let weather=document.getElementsByClassName("weather")[0]
let apiKey='01fd80bbec483fa9c5897735fdb75232'
let apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function checkWeather(city){
    const response= await fetch(apiUrl +city+`&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        weather.style.display="none"
    }
    else{
    var data= await response.json()
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h"
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    weather.style.display="block"
}
}
searchIcon.addEventListener('click',()=>{
    checkWeather(searchInput.value)
})
