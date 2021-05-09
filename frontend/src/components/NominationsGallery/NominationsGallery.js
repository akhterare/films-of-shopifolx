import React from 'react';
import PosterGallery from '../PosterGallery/PosterGallery.js'
import RemovalModal from '../RemovalModal/RemovalModal.js';
/* import SectionSubtitle from './NominationsGallery.styles.js'
 */
const NominationsGallery = ( props ) => {
    if (props.movies.length === 0) {
        return (
            <p>TEST</p>
        );
    } else if (props.movies.length <= 4){
        return (
            <PosterGallery 
                movieInfoModal={props.movieInfoModal}
                backgroundColor="rgba(39, 39, 39, 0.5)"
                sectionTitle={"your nominations"}
                sectionSubtitle={"you have some 🔥 picks!"}
                movies={props.movies}
                handleNominationClick={props.handleNominationClick}
                handleModalClose={props.handleModalClose}
                handleModalOpen={props.handleModalOpen}
                modalOpen={props.modalOpen}
                buttonText={props.buttonText}
                showButton = {props.showButton}
                currMovie = {props.currMovie}
            />
        );
    } else {
        return (
            <PosterGallery 
                movieInfoModal={props.movieInfoModal}
                backgroundColor="rgba(39, 39, 39, 0.5)"
                sectionTitle={"your nominations"}
                sectionSubtitle={"❗❗ you've reached the max nomination limit. click continue or remove a pick ❗❗"}
                movies={props.movies}
                handleNominationClick={props.handleNominationClick}
                handleModalClose={props.handleModalClose}
                handleModalOpen={props.handleModalOpen}
                modalOpen={props.modalOpen}
                showContinue={true}
                buttonText={props.buttonText}
                showButton = {props.showButton}
                currMovie = {props.currMovie}
            />
        );
    }

};

export default NominationsGallery;