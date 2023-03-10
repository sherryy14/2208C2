document.getElementById("btn").addEventListener('click',()=>{
    
    const city = document.getElementById('city').value;
    document.getElementById('name').innerText = city
    
    const weather = fetch(`https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=${city}&days=3`)

    weather.then((weatherData) => {
        return weatherData.json()
    }).then((weatherElement) => {

        console.log(weatherElement)

        let table = document.getElementById('table')
        table.innerHTML = `
        <tr>
        <th>Condition</th>
        <th>Feels Like</th>
        <th>Icon</th>
    </tr> 
    <tr>
        <td>${weatherElement.current.condition.text}</td>
        <td>${weatherElement.current.feelslike_c} <sup>0</sup>C &
            ${weatherElement.current.feelslike_f} <sup>0</sup>F </td>
        <td>
            <img src='${weatherElement.current.condition.icon}'>
        </td>
    </tr>
        `
        console.log(weatherElement.forecast.forecastday[0])

        let forecast = document.getElementById('forecast')
        let html = ''
        weatherElement.forecast.forecastday.forEach(e => {

            html += `         
          
    <tr>
        <td>${e.date}</td>
        <td>${e.astro.sunrise}</td>
        <td>${e.astro.moonrise}</td>
        <td>${e.astro.sunset}</td>
    </tr>`
            forecast.innerHTML = html

        });

    })

})

