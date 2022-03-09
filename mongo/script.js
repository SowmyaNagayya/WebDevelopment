const mongoose = require('mongoose');
const Movie = require("./Movie")

mongoose.connect("mongodb://localhost/test2db")

run()
async function run() {
    const movie = await Movie.create({ title: "Fancy Girl", year: 2000, rating: 5, genre: "Fantasy", language: "English"})
    movie.title= "Sweet Girl"
    console.log(movie)
}

