function displayresult(){
    var city=document.getElementById("city"). value ;
    var apikey='8b6f2441e0c2833cbbe7207072dbcc6b';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=> {
        var t=data['main']['temp']
        document.getElementById("temp").innerHTML=t;
        var p=data['main']['pressure']
        document.getElementById("pre").innerHTML=p;
        var h=data['main']['humidity']
        document.getElementById("hum").innerHTML=h;
    })
}