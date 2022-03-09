const API_key = `2f0f66373a5cfaca69149cc5a9397292`;
const searchTemp = () => {
    const cityName = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    console.log(temp)
    setInnerText('city-name', temp.name);
    setInnerText('city-temp', temp.main.temp);
    setInnerText('weather', temp.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('icon-img');
    iconImg.setAttribute('src', url);
}