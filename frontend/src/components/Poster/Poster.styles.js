import styled from 'styled-components';

export const PosterImage = styled.img`
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
    max-width: 100%;
    display: block;
    object-fit: cover;

    &:hover{
        border: 1px solid #323131 !important;
        border-radius: 5px;
        transform: scale(1.07);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        opacity: 50%;
    }

`

export const PosterContainer = styled.div`
    flex: 1 0 15%; 
    max-width: 25%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex-wrap: nowrap;
    position: relative;
	transition: transform 0.2s
`;

export const PosterOverlay = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
`;

export const PosterTitle = styled.h4`
    background-color: black;
    position: relative;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 20px;
    opacity: 0;
    &:hover{
        border: 1px solid #323131 !important;
        opacity: 1;
    }
`;

export const MovieTitle = styled.h4`
    color: white;
    padding: 0 15px 0 15px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    margin-block-start: 1px !important;
    margin-block-end: 0px !important;
`;

export const MovieYear = styled.p`
    display: block;
    color: white;
    margin-top: 0;
    padding: 0 15px 0 15px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
`;