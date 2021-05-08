import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.js"
import PosterGallery from "../../components/PosterGallery/PosterGallery.js"
import Button from "../../GlobalStyles"

function Nominations(props) {
  const [nominations, setNominations] = useState([]);
  const [username, setUsername] = useState('');
  
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

  if (nominations.length > 0) 
    return (
      <div>
        <Hero username={username} title="you've got good taste." subtitle="save + share your shoppies 2021 picks. we'll see you next year."/>
        <PosterGallery
          backgroundColor="rgba(39, 39, 39, 0.5)"
          sectionTitle="your nominations"
          sectionSubtitle="you have some 🔥 picks!"
          movies={nominations}
          handleNominationClick={null}
        />
      </div>
    );
  else{ 
    return (
      <div>
        <Hero username={username} title="you haven't made any picks!" subtitle="go back to our nominations page to start your selection."/>
        <Button to="/pick-films">choose your nominees</Button>
      </div>
      
    );
  }
    
}

export default Nominations;