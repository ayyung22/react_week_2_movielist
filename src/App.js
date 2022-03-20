import "./App.css";
import React from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import StarRating from "./components/StarRating";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <StarRating />
      <Review />
    </div>
  );
}

export default App;
