import React,  { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.js"
import SearchBar from "../../components/SearchBar/SearchBar.js";
import PosterGallery from "../../components/PosterGallery/PosterGallery.js";
import NominationModal from "../../components/NominationModal/NominationModal.js"
import NominationsGallery from "../../components/NominationsGallery/NominationsGallery.js";
import MovieInfoModal from "../../components/MovieInfoModal/MovieInfoModal.js";

function PickFilms() {
  const DEFAULT_MOVIE_VALUES =
    [ 
      {"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","imdbID":"tt1201607","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Sorcerer's Stone","Year":"2001","imdbID":"tt0241527","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Chamber of Secrets","Year":"2002","imdbID":"tt0295297","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Prisoner of Azkaban","Year":"2004","imdbID":"tt0304141","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Goblet of Fire","Year":"2005","imdbID":"tt0330373","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Order of the Phoenix","Year":"2007","imdbID":"tt0373889","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Deathly Hallows: Part 1","Year":"2010","imdbID":"tt0926084","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},
      {"Title":"Harry Potter and the Half-Blood Prince","Year":"2009","imdbID":"tt0417741","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"},
      {"Title":"When Harry Met Sally...","Year":"1989","imdbID":"tt0098635","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg"},
      {"Title":"Dirty Harry","Year":"1971","imdbID":"tt0066999","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzdhMTM2YTItOWU2YS00MTM0LTgyNDYtMDM1OWM3NzkzNTM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"}]
    ;
	
  const [movies, setMovies] = useState(DEFAULT_MOVIE_VALUES);
	const [searchValue, setSearchValue] = useState('');
  const [nominations, setNominations] = useState([]);
  const [username, setUsername] = useState('');
  const [atMaxFilms, setAtMaxFilms] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState("");

  const openModal = ( movie ) => {
    setSelectedMovie(movie);
  }

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=d8daf75a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  const saveToLocalStorage = (items) => {
		localStorage.setItem('films-of-shopifolx-nominations', JSON.stringify(items));
	};

  const addNominatedMovie = (movie) => {
    if (nominations.length <= 4 && !(nominations.includes(movie))) {
      const newNominationsList = [...nominations, movie];
      setNominations(newNominationsList);
      saveToLocalStorage(newNominationsList);

      // remove from movie list if selected
      const newMovieList = movies.filter(
        (currMovie) => currMovie.imdbID !== movie.imdbID
      );
      setMovies(newMovieList);
    }

    setSelectedMovie(movie);
    if (nominations.length >= 4){
      setAtMaxFilms(true);
    }
    else{
      setAtMaxFilms(false);
    }
  };

  const removeNominatedMovie = (movie) => {
    const newNominationsList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    console.log("NEW NOM LIST LENGTH IS");
    console.log(newNominationsList.length);
    setNominations(newNominationsList);
    saveToLocalStorage(newNominationsList);

    // Repopulate search list 
    getMovieRequest(searchValue);

    setSelectedMovie(movie);
    if (newNominationsList.length > 4){
      setAtMaxFilms(true);
    }
    else{
      setAtMaxFilms(false);
    }
  };

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  useEffect(() => {
		const movieNominations = JSON.parse(
			localStorage.getItem('films-of-shopifolx-nominations')
		);

		if (movieNominations)
      setNominations(movieNominations);
	}, []);

  useEffect(() => {
		const storedUsername = JSON.parse(
			localStorage.getItem('films-of-shopifolx-username')
		);

		if (storedUsername)
      setUsername(storedUsername);
	}, []);

  const selectedMovieData = "chosen: " + selectedMovie.Title + " (" + selectedMovie.Year + ")";

  return (
    <div>
      <Hero username={username} title="name your picks." subtitle="choose up to 5 films to nominate for this year’s Shoppies awards."/>
      <SearchBar value={searchValue} setSearchValue={setSearchValue} atMaxFilms={atMaxFilms} />
      <NominationsGallery
        movies={nominations}
        icon={NominationModal}
        handleNominationClick={removeNominatedMovie}
      />
      <PosterGallery
        sectionTitle="click on a film to nominate it!"
        sectionSubtitle={selectedMovie ? selectedMovieData : "you haven't selected anything yet!"} 
        movies={movies} 
        icon={NominationModal}
        handleNominationClick={addNominatedMovie}
      />
      <MovieInfoModal 
        handleNominationClick={removeNominatedMovie}
        movie={selectedMovie}
        showButton={true}
        buttonText={"test text"}
        onClose={null}
        open={false}
      ></MovieInfoModal>
    </div>
  );
}

export default PickFilms;