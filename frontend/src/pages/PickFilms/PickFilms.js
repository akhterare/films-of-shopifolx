import React,  { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.js"
import SearchBar from "../../components/SearchBar/SearchBar.js";
import PosterGallery from "../../components/PosterGallery/PosterGallery.js";

function PickFilms() {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d8daf75a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    <div>
      <Hero title="name your picks." subtitle="choose up to 5 films to nominate for this year’s Shoppies awards."/>
      <SearchBar value={searchValue} setSearchValue={setSearchValue} />
      <PosterGallery movies={movies}/>
    </div>
  );
}

export default PickFilms;