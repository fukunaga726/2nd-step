"use strict"

let url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${API_KEY}`



const temp = document.getElementById("temp");
const cloud = document.getElementById("cloud");
const icon = document.getElementById("icon");




fetch(url) 
     .then(response => response.json())
     .then(data => {
         console.log(data);
         

         const dataTemp = (data.main.temp) - 273.15;
         const dataCloud = data.clouds.all;
         const tempIcon = "";
         
         temp.innerHTML = `気温:${dataTemp.toFixed(2)}℃`;
         cloud.innerHTML = `降水確率:${dataCloud}%`;

        iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        icon.scr = iconUrl;
        
        });


        
