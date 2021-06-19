fetch('https://corona.lmao.ninja/v3/covid-19/countries/India')
.then(response=>{
   return response.json()
})
.then(data =>{
    document.getElementById('todayDeaths').textContent += data.deaths
    document.getElementById('totalcases').textContent += data.cases
})





