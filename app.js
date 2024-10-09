const filmSeries = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "movie",
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "tv",
        seasons: 5,
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "movie",
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Drama",
        rating: 8.7,
        type: "tv",
        seasons: 4,
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Drama",
        rating: 8.6,
        type: "movie",
    },
];

class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    get title() {
        return this.#title;
    }

    get genre() {
        return this.#genre;
    }

    get year() {
        return this.#year;
    }
    get rating() {
        return this.#rating;
    }

    set title(title) {
        this.#title = title;
    }

    set genre(genre) {
        this.#genre = genre;
    }

    set year(year) {
        this.#year = year;
    }

    set rating(rating) {
        this.#rating = rating;
    }

    //funzione per convertirla in stringa
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

class TvSeries extends Movie {
    #season;

    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating, "tv");
        this.seasons = seasons;
    }

    get Seaons() {
        return this.#season;
    }

    set Seasons(seasons) {
        this.#season = seasons;
    }

    //funzione per convertirla in stringa
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state riprodotte ${this.seasons}`;
    }
}

//Creo un nuovo array per stabilire le nuove istanze in base al tipo Movie o TvSeries
const istances = filmSeries.map((item) => {
    if (item.type === "movie") {
        return new Movie(item.title, item.year, item.genre, item.rating, item.type);
    } else if (item.type === "tv") {
        return new TvSeries(item.title, item.year, item.genre, item.rating, item.seasons);
    }
});

//istances.forEach((instance) => console.log(instance.toString()));

//funzione per la media voti di tutti i film per un determinato genere.
const averageRatingByGenre = (filmSeries, genre) => {
    const filteredFilms = filmSeries.filter((film) => film.genre === genre);
    const totalRating = filteredFilms.reduce((tot, film) => tot + film.rating, 0);
    const averageRating = totalRating / filteredFilms.length;

    return `La media dei voti per i film del genere "${genre}" è ${averageRating.toFixed(2)}.`;
};

//console.log(averageRatingByGenre(filmSeries, "Sci-Fi"));

//funzione per recuperare i tutti i generi senza duplicati
const duplicateRemover = (filmSeries) => {
    const genreNoDuplicates = [];
    filmSeries.forEach((item) => {
        if (!genreNoDuplicates.includes(item.genre)) {
            genreNoDuplicates.push(item.genre);
        }
    });

    return genreNoDuplicates;
};

const allGenre = duplicateRemover(istances);
//console.log(`I generi sono: ${allGenre}`);

//funzione per recuperare i generi in to string
const getMovieStringBygenre = (filmSeries, genre) => {
    const filteredFilms = filmSeries.filter((film) => film.genre === genre);

    return filteredFilms.map((m) => m.toString());
};

console.log(getMovieStringBygenre(istances, "Drama"));

class Cart {
    #price = 3.99;
    #movies = [];

    get movies() {
        return this.#movies;
    }

    addMovies(movie) {
        if (this.#movies.filter((m) => m.title === movie.title).length > 0) {
            return;
        }
        this.#movies.push(movie);
    }

    removeMovie(movie) {
        this.#movies = this.#movies.filter((m) => m.title !== movie.title);
    }

    getTotal() {
        return this.#movies.length * this.#price;
    }
}
