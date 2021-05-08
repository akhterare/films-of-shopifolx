import styled from 'styled-components';

export const PosterGalleryGrid = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 7rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px 50px
    grid-gap: 5px
`;

export const PosterSection = styled.div`
    display: flex;
    padding: 10px;
    display: inline;
    justify-content: center;
    align-items: center;
    margin: 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
`;

export const Poster = styled.img`
    width: 15%;
`