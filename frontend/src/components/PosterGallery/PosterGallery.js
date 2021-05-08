import React from 'react';
import Poster from '../Poster/Poster.js'
import { 
    Continue,
    ContinueBtn,
    SectionTitle, 
    SectionSubtitle, 
    PosterGalleryGrid, 
} from './PosterGallery.styles'
import Button from '../../GlobalStyles'

const PosterGallery = ( props ) => {
    return (
        <PosterGalleryGrid 
            backgroundColor={props.backgroundColor}
            >
            <SectionTitle>{props.sectionTitle ? props.sectionTitle : ""}</SectionTitle>
            <SectionSubtitle>{props.sectionSubtitle ? props.sectionSubtitle : ""}</SectionSubtitle>
            {props.movies.map((movie, index) => (
                <Poster 
                    movie={movie}
                    handleNominationClick={props.handleNominationClick}
                />
            ))}
            {props.showContinue ? 
                <ContinueBtn to="/nominations">
                    <Button>continue</Button>
                </ContinueBtn>
            : null }
        </PosterGalleryGrid>
    );
};

export default PosterGallery;