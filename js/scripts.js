// Business Logic for Places ---------
function Tickets() {
    this.movies = [];
}

function Movie(name, showtime, ageRestrict) {
    this.name = name;
    this.showtime = showtime;
    this.ageRestrict = ageRestrict;
}

Tickets.prototype.addMovie = function(movie) {
    this.movies.push(movie);
};

let tickets = new Tickets();

let movie1 = new Movie("Guardians of the Galaxy", ["12p", "6p"], 17);
let movie2 = new Movie("The Avengers", ["1p", "4p", "7p"], 13);
let movie3 = new Movie("The Incredibles", ["2p", "5p", "8p"], 0);

tickets.addMovie(movie1);
tickets.addMovie(movie2);
tickets.addMovie(movie3);


// UI Logic
window.addEventListener("load", function() {
    let nameInput = document.getElementById("nameInput");
    tickets.movies.forEach(function(movie, index) {
        let option = document.createElement("option");
        option.value = index;
        option.text = movie.name;
        nameInput.append(option);
    });

    nameInput.addEventListener("change", function() {
        let movieSelectionIndex = nameInput.value;
        let showtimeInput = document.getElementById("showtimeInput");
        showtimeInput.innerHTML = "";

        let movieSelection = tickets.movies[movieSelectionIndex];
        movieSelection.showtime.forEach(function(showtime) {
            let option = document.createElement("option");
            option.value = showtime;
            option.textContent = showtime;
            showtimeInput.append(option);
        });
    });

    document.querySelector("#movieForm").onsubmit = function(event) {
        event.preventDefault();
        let name = document.getElementById("nameInput").value;
        let showtime = document.getElementById("showtimeInput").value;
        let ageRestrict = document.getElementById("ageRestrictInput").value;

        let movieSelectionIndex = nameInput.value;
        let movieSelection = tickets.movies[movieSelectionIndex];

        let ticket = new Ticket(movieSelection.name, showtime, ageRestrict);

        let moviesOutput = document.getElementById("moviesOutput");
        moviesOutput.innerHTML = "";

        let price = ticket.calculatePrice();

        alert("Ticket Price: $" + price);
    };
});

console.log(Movie(movie1))
