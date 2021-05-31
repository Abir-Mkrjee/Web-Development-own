function updateTemperature(temp, region)
{
    let location = document.querySelector(".location-timezone");
    let temperature = document.querySelector(".temperature-degree");

    location.innerHTML = region;
    temperature.innerHTML = temp;
}
 function updateIcon(status){
     let icon = document.getElementById("logo");
     let description = document.querySelector(".temperature-description"); 
     console.log(status);
     if(status == "Haze")
     {
         icon.src = './Icons/Haze.png';
         description.innerHTML = "Mmm...feels quite Hazy"
     }
     else if(status == "Rain")
     {
         icon.src = './Icons/raining.png';
         description.innerHTML = "Ahh...It's Raining here!"
     }
     else if(status == "Clear")
     {
         icon.src = './Icons/sun.png';
         description.innerHTML = "Clear Sky, Nice Mood! Aha!"
     }
     else if(status == "Clouds")
     {
         icon.src = './Icons/cloudy.svg';
         description.innerHTML = "Oh No!...Clouds! might be Raining soon!"
     }
 }
    
document.querySelector("button").addEventListener("click",(e)=>{
    let cityName = document.getElementById("input-data").value;
    const API_QUERY = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f64e3e1c1691d87b0086e758074b59c0&units=metric`;
    console.log(API_QUERY);
    
    const info = fetch(API_QUERY)
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data);
                        let icon = data['weather']['0']['main'];
                        let temp = data['main']['temp'];
                        let region = data['name'];

                        
                       updateTemperature(temp,region);
                       updateIcon(icon);
         });
});


window.addEventListener('load',(e)=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);
        });
    }
});
