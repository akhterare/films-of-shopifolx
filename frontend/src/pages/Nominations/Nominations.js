import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.js"
import PosterGallery from "../../components/PosterGallery/PosterGallery.js"

function Nominations(props) {
  const [nominations, setNominations] = useState([]);
  
  useEffect(() => {
		const movieNominations = JSON.parse(
			localStorage.getItem('films-of-shopifolx-nominations')
		);

		if (movieNominations)
      setNominations(movieNominations);
	}, []);

  return (
    <div>
      <Hero title="you've got good taste." subtitle="save + share your shoppies 2021 picks. we'll see you next year."/>
      <PosterGallery
        backgroundColor="rgba(39, 39, 39, 0.95);"
        sectionTitle="your nominations"
        sectionSubtitle="you have some 🔥 picks!"
        movies={nominations}
        handleNominationClick={null}
      />
    </div>
  );
}

export default Nominations;