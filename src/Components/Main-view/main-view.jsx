import React  from 'react';
import MovieView  from '../Movie-view/movie-view';
import MovieCard from '../Moviecard-view/moviecard-view';


 class MainView extends React.Component {
    constructor(){
    super();
    this.state = {
      movies: [
  {
    _id: 1,
    Title: 'Silence of the Lambs',
    Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    Genre: {
      Name: 'Thriller',
      Description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.'
    },
    Director: {
      Name: 'Jonathan Demme',
      Bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
      Birth: '1944',
      Death: '2017'
    },
    ImagePath: 'https://www.imdb.com/title/tt0102926/mediaviewer/rm803658241/?ref_=tt_md_3',
    Featured: true
  },
  {
    _id: 2,
    Title: 'Lord of the Ring',
    Description: ' A  fellowship of hobbits , elves,dwarfs and men is formed to destroy the ring by casting it into the volcanic fire of the crack of doom .',
    Genre: {
      Name: 'High fantasy',
      Description: 'high fantasy is set in an alternative , fictional world , rather than real world.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: '.He is best know as the director , writer and producer of Lord of the Rings and the Hobbit trilogy . both of which are adapted from the novels .',
      Birth: '1961',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i',
    Featured: true
  },
  {
    _id: 3,
    Title: 'Coco',
    Description: 'The story follows a 12-years-old boy named Miguel who is accidentally transported to the Land of Dead.',
    Genre: {
      Name: 'Animated',
      Description: 'Animation is a method in which pictures are manipulated to appear as moving images.'
    },
    Director: {
      Name: 'Lee Unkrich',
      Bio: ' He is an American retired film director , film editor , screenwriter , and animator.',
      Birth: '1967',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt2380307/mediaviewer/rm585455872/?ref_=tt_ov_i',
    Featured: true
  },
      ]
    }
}

render() {
  const { movies, selectedMovie } = this.state;

  if (selectedMovie) return <MovieView movie={selectedMovie} />;

  if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

  return (

    <div className="main-view">
      {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
        : movies.map(movie => (
          <MovieCard key={movie.Title} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
        ))
      }
    </div>

  );
}
  }


export default MainView ;

