import React from "react";
import Movie from "./Movie";
import "./MovieList.css";

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="container">
        <Movie
          {...{
            id: 1,
            key: 1,
            title: "Spider-Man: No Way Home",
            release: "December 17, 2022",
            summary:
              "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
          }}
        />
        <Movie
          {...{
            id: 2,
            key: 2,
            title: "The Adam Project",
            release: "March 11, 2022",
            summary:
              "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Adam_Project_poster.png",
          }}
        />
        <Movie
          {...{
            id: 3,
            key: 3,
            title: "No Exit",
            release: "February 25, 2022",
            summary:
              "A college student, on her way home from visiting her mother, gets stuck with a group of people at a mountain rest stop during a blizzard. Things take a turn for the worse when the young woman discovers a kidnapped child in a car belonging to one of the people inside, putting the group in a terrifying life-or-death situation as they struggle to escape while trying to discover who among them is the kidnapper.",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/1/1d/No_Exit_poster.jpeg",
          }}
        />
      </div>
    );
  }
}
