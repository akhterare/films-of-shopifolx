import React from 'react';
import { Poster, PosterGalleryGrid, PosterSection } from './PosterGallery.styles'

const PosterGallery = ( props ) => {
	return (
        <PosterGalleryGrid>
        {props.movies.map((movie, index) => (
            <PosterSection>
                <Poster src={movie.Poster} alt='movie'/>
            </PosterSection>
        ))}
        </PosterGalleryGrid>
	);
};

export default PosterGallery;