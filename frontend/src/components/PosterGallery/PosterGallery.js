import React from 'react';
import Poster from '../Poster/Poster.js'
import { 
    SectionTitle, 
    SectionSubtitle, 
    PosterGalleryContainer,
    PosterGalleryGrid, 
} from './PosterGallery.styles'

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
                        movie={movie}
                        handleNominationClick={props.handleNominationClick}
                    />
                ))}
            </PosterGalleryGrid>
        </PosterGalleryContainer >
    );
};

export default PosterGallery;