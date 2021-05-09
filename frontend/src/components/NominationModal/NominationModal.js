import React from 'react'
import MovieInfoModal from '../MovieInfoModal/MovieInfoModal'

export default function NominationalModal(props) {
    return (
        <MovieInfoModal 
            handleNominationClick={props.handleNominationClick}
            buttonText= "Nominate This Film"
            open={open}
            atMax={props.atMax}
            handleNominationClick={props.handleNominationClick}
            movie={props.movie}
            onClose={handleClose}
        />
	);
}