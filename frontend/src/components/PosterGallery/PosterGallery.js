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
                        atMax={props.atMax}
                        movie={movie}
                        handleNominationClick={props.handleNominationClick}
                        handleModalOpen={props.handleModalOpen}
                        buttonText={props.buttonText}
                        showButton = {props.showButton}
                        currMovie = {props.currMovie}
                    />
                ))}
            </PosterGalleryGrid>
        </PosterGalleryContainer >
    );
};

export default PosterGallery;