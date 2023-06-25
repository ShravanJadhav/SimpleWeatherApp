const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf6b959db3mshb93906b288bbdfdp1023fcjsn919dc0f9d763',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let citySound = document.getElementById('city-found');

const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        
        if(response.error){

            
            citySound.innerHTML='City is not found, please try with differnt city';
            
            cloud_pct.innerHTML= ""
            temp.innerHTML= ""
            feels_like.innerHTML=  ""
            // humidity.inneHTML= ""
            min_temp.innerHTML= ""
            max_temp.innerHTML=  ""
            wind_speed.innerHTML=  ""
            wind_degrees.innerHTML=  ""
            sunrise.innerHTML= ""
            sunset.innerHTML= ""  
             
        }else{
            citySound.innerHTML='';
        cloud_pct.innerHTML= response.cloud_pct
        temp.innerHTML= response.temp
        feels_like.innerHTML= response.feels_like
        //   humidity.inneHTML= response.humidity
        min_temp.innerHTML= response.min_temp
        max_temp.innerHTML= response.max_temp
        wind_speed.innerHTML= response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML= response.sunset   
        }
    })
	.catch(err => console.error(err));
} 
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

