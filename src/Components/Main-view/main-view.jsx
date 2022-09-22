/* eslint-disable no-undef */
import React  from 'react';
import MovieView  from '../Movie-view/movie-view';
import MovieCard from '../Moviecard-view/moviecard-view';


 class MainView extends React.Component {
    constructor(){
    super();
    this.state = {movies:[],selectedMovie:null,}
}

render() {
  const { movies, selectedMovie } = this.state;

  if (selectedMovie) return <MovieView movie={selectedMovie} />;

  return movies.length === 0 ? <div className="main-view">The list is empty!</div> : (
    <div className="main-view">
    {setSelectedMovie = (movie) => { this.setState((prev) => ({...prev , selectedMovie:movie}))}};
    
     {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
        <div>
          <button onBackClick = { () => { this.setState((prev) => ({...prev, selectedMovie: null }))}}>Back</button>
        </div>
   </div>
  );
      }
    }


export default MainView ;

