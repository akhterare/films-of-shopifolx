import React from 'react';
import Poster from '../Poster/Poster.js'
import { 
    SectionTitle, 
    SectionSubtitle, 
    PosterGalleryGrid, 
} from './PosterGallery.styles'

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
        </PosterGalleryGrid>
    );
};

export default PosterGallery;