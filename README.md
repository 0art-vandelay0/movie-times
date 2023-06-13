## Unit Tests

### Describe Movie()

Test: "It will create a movie object wiht name, showtime, and age restriction as properties"
Code:
let movie1 = new Movie("Guardians of the Glaxay", ["12p", "6p"], 17);
movie1;
Expected Results:
Movie {name: 'Guardians of the Glaxay', showtime: Array(2) ["12p", "6p"], ageRestrict: 17}

### Describe Tickets()

#### Test:

"It will create a Tickets object that holds and empty array of Movies object(s)."

#### Code:

let ticket = new Ticket();
tickets

#### Expected Output:

Tickets {movies: Array(0)}
