"use strict"

let url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b19bfb39974728801a922faab371fff3"

const temp = document.getElementById("temp");
const cloud = document.getElementById("cloud");
const icon = document.getElementById("icon");

fetch(url) 
     .then(response => response.json())
     .then(data => {
         console.log(data);
         

         const dataTemp = (data.main.temp) - 273.15;
         const dataCloud = data.clouds.all;
         const dataIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
         
         temp.innerHTML = dataTemp.toFixed(2);
         cloud.innerHTML = dataCloud;
         icon.innerHTML = dataIcon;

        
        });


        
    //  アイコンのURL : http://openweathermap.org/img/w/04n.png
