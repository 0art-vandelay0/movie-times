## Unit Tests

### **Describe Movie()**

#### Test:

"It will create a movie object wiht name, showtime, and age restriction as properties"

#### Code:

let movie1 = new Movie("Guardians of the Glaxay", ["12p", "6p"], 17);
movie1;

#### Expected Results:

Movie {name: 'Guardians of the Glaxay', showtime: Array(2) ["12p", "6p"], ageRestrict: 17}
<br>
<br>
<br>

### **Describe Tickets()**

#### Test:

"It will create a Ticket object that holds and empty array of Movies object(s)."

#### Code:

let ticket = new Ticket();
tickets;

#### Expected Output:

Tickets {movies: Array(0)}
<br>
<br>
<br>

### **Describe addMovie()**

#### Test:

"It will store a Movie object when created and called."

#### Code:

let tickets = new Ticket();<br>
let movie2 = new Movie("The Avengers", ["1p", "4p", "7p"], 13);
tickets.addMovie(movie2);
tickets;

#### Expected Output:

Tickets {movies: Array(1)}
movies: [Movie]
[[Prototype]]: Object
