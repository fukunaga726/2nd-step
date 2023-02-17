"use strict"

let url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b19bfb39974728801a922faab371fff3"

fetch(url) 
     .then(response => response.json())
     .then(data => {
        console.log(data);
     });

     


    // 東京のデータは？　上のurlで東京に絞り込み済み
    // 気温は？
    // 降水確率は？




















