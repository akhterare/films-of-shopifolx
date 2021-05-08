import styled from 'styled-components';

export const PosterImage = styled.img`
    width: 15%;
    border-radius: 5px;

    &:hover{
        border: 1px solid #323131 !important;
        border-radius: 5px;
        transform: scale(1.07);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

`

export const PosterContainer = styled.div`
    display: flex;
    padding: 10px;
    display: inline;
    justify-content: center;
    align-items: center;
    margin: 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
`;
