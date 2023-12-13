let apiKey = 'dd81fc731ce6f6b3dface1bc940547af';    
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let diferenciaKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }    
}   )    


function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`).then(response => response.json()).then(response => mostrarDatosClima(response));
}


function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description 
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura - diferenciaKelvin)} ºC`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)

}