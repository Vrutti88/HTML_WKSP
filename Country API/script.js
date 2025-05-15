function handleSearch(){
    const countryName=document.getElementById("userInput").value;
    const result=document.getElementById('result');
    const APIurl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(APIurl)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data[0]);

        result.innerHTML=`<img src="${data[0].flags.png}" alt="">
        <h2>Name:- ${data[0].name.common}</h2>
        <h2>Capital:- ${data[0].capital}</h2>
        <h3>Continents:- ${data[0].continents[0]}</h3>
        <h3>Currencies:- ${Object.keys(data[0].currencies)}</h3>
        <h3>Languages:- ${Object.keys(data[0].languages)}</h3>
        <h3>Population:- ${data[0].population}</h3>`
    })
}
SVGDefsElement,nc