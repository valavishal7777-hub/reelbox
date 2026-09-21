var movies = {
    "3-idiots": {
        title: "3 Idiots",
        genre: "Comedy / Drama",
        year: "2009",
        rating: "⭐ 8.4/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSW5tXcNZgPHs6j1UwF9M7l2Sn3sa9dNvmEhg7FD7Zjg&s=10",
        description: "Three friends experience college life, friendship and the pressure of education."
    },

    "dangal": {
        title: "Dangal",
        genre: "Drama / Sports",
        year: "2016",
        rating: "⭐ 8.3/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kJRsLoYxRBpYMYaeE4OCwuSlBIbb5u81uac-XwzDow&s=10",
        description: "A former wrestler trains his daughters to become successful wrestlers."
    },

    "chhichhore": {
        title: "Chhichhore",
        genre: "Comedy / Drama",
        year: "2019",
        rating: "⭐ 8.3/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nHZqcWjVirC6LaDikNF6iQQwhtvPwcrjvZknZ-30og&s=10",
        description: "A group of friends remembers their college days and the importance of friendship."
    },

    "shershaah": {
        title: "Shershaah",
        genre: "War / Romance",
        year: "2021",
        rating: "⭐ 8.3/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQ--MKJ9BMc7NGXhbhfqYIDgeVG6s5LKkuMJqLls_IA&s=10",
        description: "A biographical war drama about an Indian Army officer and his journey."
    },

    "inception": {
        title: "Inception",
        genre: "Sci-Fi / Thriller",
        year: "2010",
        rating: "⭐ 8.8/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbURRGnh1Vn4Y1H0c9ttHPJ0AfLwoyDM4N-OTIlh2ow&s=10",
        description: "A skilled thief enters people's dreams to steal and plant ideas."
    },

    "interstellar": {
        title: "Interstellar",
        genre: "Sci-Fi / Drama",
        year: "2014",
        rating: "⭐ 8.7/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3u2sQsyhArChWFci_uRUDeYspdvWF89pq5gcAI4tZfA&s=10",
        description: "A team travels through space to search for a new home for humanity."
    },

    "avatar": {
        title: "Avatar",
        genre: "Sci-Fi / Adventure",
        year: "2009",
        rating: "⭐ 7.9/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOEduVJm0g_07YhFMbYj2CcIFG9pOnVzdiuYTvp91Bw&s=10",
        description: "A human becomes part of the world of Pandora and its people."
    },

    "titanic": {
        title: "Titanic",
        genre: "Romance / Drama",
        year: "1997",
        rating: "⭐ 7.9/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErvzi-28e-p5B_jrBUhoStBmYgUg2OliDZzZ8BmC_yA&s=10",
        description: "A romantic drama set aboard the famous Titanic ship."
    },

    "avengers": {
        title: "Avengers",
        genre: "Action / Sci-Fi",
        year: "2012",
        rating: "⭐ 8.0/10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUWhz9iCsTs_kTWTYkk6FpkjEm3xI6bVa-IY57sPuBA&s=10",
        description: "Earth's mightiest heroes assemble to save the world from an unexpected enemy."
    }
};

// Get movie name from URL
var params = new URLSearchParams(window.location.search);
var movieName = params.get("movie");

// Find selected movie (supports both with space or hyphen)
var movie = null;
if (movieName) {
    var key = movieName.toLowerCase().replace(" ", "-");
    movie = movies[movieName] || movies[key];
}

// Show movie details
if (movie) {

    document.getElementById("movieTitle").innerText = movie.title;

    document.getElementById("movieGenre").innerText = "Genre: " + movie.genre;

    document.getElementById("movieYear").innerText = "Year: " + movie.year;

    document.getElementById("movieRating").innerText = movie.rating;

    document.getElementById("movieDescription").innerText = movie.description;

    document.getElementById("movieImage").src = movie.image;

}
else {

    document.getElementById("movieTitle").innerText = "Movie Not Found";

    document.getElementById("movieDescription").innerText =
        "Please select a movie from the Movies page.";

}