import React from 'react';
import { 
    PosterImage,
    PosterContainer,
} from './Poster.styles'

const Poster = ( props ) => {
	return (
        <PosterContainer>
            <PosterImage 
                src={props.movie.Poster} 
                alt='movie'
                onClick={() => props.handleNominationClick(props.movie)}
            />
        </PosterContainer>
	);
};

export default Poster;