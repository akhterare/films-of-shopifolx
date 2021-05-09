import React from 'react'
import MovieInfoModal from '../MovieInfoModal/MovieInfoModal'

export default function RemovalModal(props) {
    return (
        <MovieInfoModal 
            handleNominationClick={props.handleNominationClick}
            buttonText= "Remove This Film"
        />
	);
}