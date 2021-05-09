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
                    />
                ))}
            </PosterGalleryGrid>
            {props.showContinue ? 
                <ContinueBtn to="/nominations">
                    <Button>continue</Button>
                </ContinueBtn>
            : null }
        </PosterGalleryContainer >
    );
};

export default PosterGallery;