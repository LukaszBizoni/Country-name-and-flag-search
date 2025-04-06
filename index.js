function exibirdadospais (infopais){
    console.log (infopais)
    document.getElementById('country-flag').src = infopais.flags.png
    document.getElementById('country-name').textContent = infopais.name.common
    document.getElementById('country-capital').textContent = infopais.capital[0]
}



async function obterpais(pais) {
    console.log(pais);
    const url = `https://restcountries.com/v3.1/name/${pais}`
    const response =  await fetch(url)
    const data = await response.json()
    return data[0]
}

document.getElementById('country-input').addEventListener('keydown', 
        async (evento) => {
            if (evento.key === 'Enter') {
                const infopais =   await obterpais(evento.target.value)
                exibirdadospais (infopais)
    }
});
