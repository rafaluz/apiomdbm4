// form = document.getElementById('movieForm')
// title = document.getElementById('title')

function getMovieInfos(title){
    const url = `https://www.omdbapi.com/?t=${title}&apikey=790af7bc`
    fetch(url) // acessando a rota
    .then(response => response.json()) //pega o resultado e transforma em json
    .then(data => {

        console.log(data)

        movieTitle.textContent = data.Title
        movieYear.textContent = data.Year
        movieGenre.textContent = data.Genre
        movieRuntime.textContent = data.Runtime
        moviePlot.textContent = data.Plot
        moviePoster.src = data.Poster


    })
}

movieForm.addEventListener('submit', function(e) {
    
    getMovieInfos(title.value)



    // impede o envio do form
    e.preventDefault();


});



