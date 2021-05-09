import React from 'react';
import { 
    PosterImage,
    PosterContainer,
    PosterOverlay,
    PosterTitle,
    MovieTitle,
} from './Poster.styles'

const Poster = ( props ) => {
	return (
        <PosterContainer>
            <PosterImage 
                src={props.movie.Poster} 
                alt='movie'
                onClick={() => props.handleNominationClick(props.movie)}
            />
            <MovieTitle>{props.movie.title}</MovieTitle>
        </PosterContainer>
	);
};

export default Poster;