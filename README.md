# Movie Gallery App

A simple application to practice using **React**, **Redux**, and **Sagas**. Users can add movies, view a gallery of their movies, and view details of specific movies.

---

## Getting Started

### Prerequisites
- **Node.js** must be installed on your system.
- Any IDE or text editor (e.g., **VSCode**).

### Database Setup
- Ensure PostgreSQL is installed.
- Create a database named `saga_movies_weekend`.
- Set up the required tables (see SQL setup instructions below).

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```

2. Navigate into the project folder:
   ```bash
   cd movie-gallery-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server and client:
   ```bash
   npm run server   # Starts the backend server
   npm run client   # Starts the React frontend
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Technologies Used
- **React**
- **Redux**
- **Redux-Saga**
- **Express.js**
- **Node.js**
- **JavaScript**

---

## SQL Setup
Create the required database tables and seed data using the following SQL:
```sql
-- CREATE DATABASE "saga_movies_weekend"

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);

CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);

-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);

--------[ DATA! ]---------

-- Starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES 
('Avatar', 'images/avatar.jpeg', 'Avatar (marketed as James Cameron''s Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron, and stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium, a room-temperature superconductor. The expansion of the mining colony threatens the continued existence of a local tribe of Na''vi – a humanoid species indigenous to Pandora. The film''s title refers to a genetically engineered Na''vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.'),
('Beauty and the Beast', 'images/beauty-and-the-beast.jpg', 'Beauty and the Beast is a 2017 American musical romantic fantasy film directed by Bill Condon from a screenplay written by Stephen Chbosky and Evan Spiliotopoulos. Co-produced by Walt Disney Pictures and Mandeville Films, it was filmed in the UK with predominantly British principal actors. The film is a live-action remake of Disney''s 1991 animated film of the same name, itself an adaptation of Jeanne-Marie Leprince de Beaumont''s 18th-century fairy tale. The film features an ensemble cast that includes Emma Watson and Dan Stevens as the eponymous characters with Luke Evans, Kevin Kline, Josh Gad, Ewan McGregor, Stanley Tucci, Audra McDonald, Gugu Mbatha-Raw, Ian McKellen, and Emma Thompson in supporting roles.'),
('Captain Marvel', 'images/captain-marvel.jpg', 'Captain Marvel is a 2019 American superhero film based on the Marvel Comics character Carol Danvers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the twenty-first film in the Marvel Cinematic Universe (MCU). The film is written and directed by Anna Boden and Ryan Fleck, with Geneva Robertson-Dworet also contributing to the screenplay. Brie Larson stars as Danvers, alongside Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch, Gemma Chan, Annette Bening, Clark Gregg, and Jude Law. Set in 1995, the story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations.'),
('Finding Nemo', 'images/finding-nemo.jpg', 'Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Andrew Stanton with co-direction by Lee Unkrich, the film stars the voices of Albert Brooks, Ellen DeGeneres, Alexander Gould, and Willem Dafoe. It tells the story of the overprotective ocellaris clownfish named Marlin who, along with a regal blue tang named Dory, searches for his abducted son Nemo all the way to Sydney Harbour. Along the way, Marlin learns to take risks and comes to terms with Nemo taking care of himself.'),
('Gone Girl', 'images/gone-girl.jpg', 'Gone Girl is a 2014 American psychological thriller film directed by David Fincher and written by Gillian Flynn, based on her popular 2012 novel of the same title. The film stars Ben Affleck, Rosamund Pike, Neil Patrick Harris, and Tyler Perry. Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the primary suspect in the sudden disappearance of his wife Amy (Pike).');

-- Starter genres
INSERT INTO "genres" ("name")
VALUES 
('Adventure'),
('Animated'),
('Biographical'),
('Comedy'),
('Disaster'),
('Drama'),
('Epic'),
('Fantasy'),
('Musical'),
('Romantic'),         --10
('Science Fiction'),  --11
('Space-Opera'),      --12
('Superhero');        --13

-- Starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES 
(1,1), (1,7), (1,6),      -- Avatar
(2,1), (2,9), (2,6),      -- Beauty
(3,13),                   -- Cpt Marvel
(4,4), (4,2),             -- Nemo
(5,3);                    -- Gone Girl
```

---

## Features
- **Add Movies**: Users can add a new movie to the gallery.
- **View Gallery**: See a list of all added movies.
- **Movie Details**: View detailed information for each specific movie.

---

## Running the App
- Use **VSCode** or your favorite IDE for editing.
- Ensure both server and client are running simultaneously.
- You can add, view, and explore movies in the app.

---

## License
This project is for practice purposes and is not licensed for production use.

---

Happy Coding! 🎬
