## Unit Tests

### **Describe Movie()**

#### **_Test:_**

"It will create a movie object with 'name', 'showtime', and 'age restriction' as properties"

#### **_Code:_**

let movie1 = new Movie("Guardians of the Glaxay", ["12p", "6p"], 17);
movie1;

#### **_Expected Results:_**

Movie {name: 'Guardians of the Glaxay', showtime: Array(2) ["12p", "6p"], ageRestrict: 17}
<br>
<br>
<br>

### **Describe Tickets()**

#### **_Test:_**

"It will create a Ticket object that holds and empty array of Movies object(s)."

#### **_Code:_**

let ticket = new Ticket();
tickets;

#### **_Expected Output:_**

Tickets {movies: Array(0)}
<br>
<br>
<br>

### **Describe addMovie()**

#### **_Test:_**

"It will store a Movie object when created and called."

#### **_Code:_**

let tickets = new Ticket();<br>
let movie2 = new Movie("The Avengers", ["1p", "4p", "7p"], 13);
tickets.addMovie(movie2);
tickets;

#### **_Expected Output:_**

Tickets {movies: Array(1)}
movies: [Movie]
[[Prototype]]: Object

### **Describe Ticket()**

#### **_Test:_**

"It will "

#### **_Code:_**

#### **_Expected Output:_**
