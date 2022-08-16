let input = document.getElementById("input")
let button = document.getElementById("button")
let list = document.getElementById("list")

button.addEventListener("click", ()=>{
    let inputValue = input.value
    let url = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`
    console.log(url)
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            list.innerHTML = `
                <img class="flag" src="${data[0].flags.svg}">
                <h2>${data[0].name.common}</h2>
                <div class="info-wrapper">
                    <div class="info-text">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                    <div class="info-text">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                    <div class="info-text">
                        <h4>Subregion:</h4>
                        <span>${data[0].subregion}</span>
                    </div>
                    <div class="info-text">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                    <div class="info-text">
                        <h4>Cordinate:</h4>
                        <span>${data[0].capitalInfo.latlng[0]}, ${data[0].capitalInfo.latlng[1]}</span>
                    </div>
                    <div class="info-text">
                        <h4>Fifa:</h4>
                        <span>${data[0].fifa}</span>
                    </div>
                </div>
            `
        })
        .catch(() => {
            if(inputValue.length == 0){
                list.innerHTML = `<h3>Please type</h3>`
            }
            else{
                list.innerHTML = `<h3>No results</h3>`
            }
        })
})