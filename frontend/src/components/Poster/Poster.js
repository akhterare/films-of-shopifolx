import React from 'react';
import { 
    PosterImage,
    PosterContainer,
    PosterOverlay,
    PosterTitle,
} from './Poster.styles'

const Poster = ( props ) => {
	return (
        <PosterContainer>
            <PosterImage 
                src={props.movie.Poster} 
                alt='movie'
                onClick={() => props.handleNominationClick(props.movie)}
            />
            <PosterOverlay>
                <PosterTitle>TEST OUT{props.movie.Title}</PosterTitle>
            </PosterOverlay>
        </PosterContainer>
	);
};

export default Poster;