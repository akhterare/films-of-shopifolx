import React, { useState } from 'react';
import { 
    PosterImage,
    PosterContainer
} from './Poster.styles'
import NominationModal from '../MovieInfoModal/MovieInfoModal'
import MovieInfoModal from '../MovieInfoModal/MovieInfoModal';

const Poster = ( props ) => {
    const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	  };
	
	const handleClose = () => {
		setOpen(false);
	};
	
	return (
        <PosterContainer>
            <PosterImage 
                src={props.movie.Poster} 
                alt='movie'
                onClick = {handleOpen}
            />
            <MovieInfoModal
                open={open}
                atMax={props.atMax}
                handleNominationClick={props.handleNominationClick}
                movie={props.movie}
                onClose={handleClose}
            />
        </PosterContainer>
	);
};

export default Poster;