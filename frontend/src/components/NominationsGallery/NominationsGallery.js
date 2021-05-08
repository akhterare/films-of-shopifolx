import React from 'react';
import PosterGallery from '../PosterGallery/PosterGallery.js'
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
                backgroundColor="rgba(39, 39, 39, 0.5)"
                sectionTitle={"your nominations"}
                sectionSubtitle={"you have some 🔥 picks!"}
                movies={props.movies}
                handleNominationClick={props.handleNominationClick}
            />
        );
    } else {
        return (
            <PosterGallery 
                backgroundColor="rgba(39, 39, 39, 0.5)"
                sectionTitle={"your nominations"}
                sectionSubtitle={"❗❗ you've reached the max nomination limit. click continue or remove a pick ❗❗"}
                movies={props.movies}
                handleNominationClick={props.handleNominationClick}
            />
        );
    }

};

export default NominationsGallery;