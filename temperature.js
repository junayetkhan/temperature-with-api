const Api_Key = `b7067705dab26698e7ea58c6b92234e4`;

const loadtemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemperature(data))
    
};
const displaytemperature = data =>{
    // console.log(data.weather.main)
    setinnertext('temp', data.main.temp);
    setinnertext('lead',data.weather[0].main);
}
const setinnertext = (id,text)=>{
    const getTemp = document.getElementById(id);
    getTemp.innerText = text;
}
document.getElementById('searchbtn').addEventListener('click',function(){
    const getText = document.getElementById('inputtext');
    const city = getText.value;
    document.getElementById('city').innerText = city;
    loadtemperature(city);
})
loadtemperature('dhaka');