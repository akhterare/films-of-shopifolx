import React from 'react';
import Poster from '../Poster/Poster.js'
import { 
    Continue,
    ContinueBtn,
    SectionTitle, 
    SectionSubtitle, 
    PosterGalleryContainer,
    PosterGalleryGrid, 
} from './PosterGallery.styles'
import Button from '../../GlobalStyles'
import MovieInfoModal from '../MovieInfoModal/MovieInfoModal';

const PosterGallery = ( props ) => {
    
    return (
        <PosterGalleryContainer 
            backgroundColor={props.backgroundColor}
            >
            <SectionTitle>{props.sectionTitle ? props.sectionTitle : ""}</SectionTitle>
            <SectionSubtitle>{props.sectionSubtitle ? props.sectionSubtitle : ""}</SectionSubtitle>
            <PosterGalleryGrid>
                {props.movies.map((movie, index) => (
                    <Poster 
                        movieInfoModal={props.movieInfoModal}
                        atMax={props.atMax}
                        movie={movie}
                        handleNominationClick={props.handleNominationClick}
                        handleModalClose={props.handleModalClose}
                        handleModalOpen={props.handleModalOpen}
                        modalOpen={props.modalOpen}
                        buttonText={props.buttonText}
                        showButton = {props.showButton}
                        currMovie = {props.currMovie}
                    />
                ))}
                {(props.movies.includes(props.currMovie)) ? <MovieInfoModal
                    buttonText={props.buttonText}
                    open = {props.modalOpen}
                    atMax={props.atMax}
                    handleNominationClick={props.handleNominationClick}
                    movie={props.currMovie}
                    onClose={props.handleModalClose}
                    showButton = {props.showButton}
                /> :
                null }
            </PosterGalleryGrid>
        </PosterGalleryContainer >
    );
};

export default PosterGallery;