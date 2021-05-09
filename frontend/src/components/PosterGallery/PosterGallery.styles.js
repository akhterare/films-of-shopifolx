import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Continue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ContinueBtn = styled(Link)`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    outline: none;
`;

export const SectionTitle = styled.h3`
    font-weight: 600;
    margin: 10px;
    text-align: center;
    justify-content: center;
    color: #D20404;
`

export const SectionSubtitle = styled.h4`
    margin: 10px;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
`

export const PosterGalleryContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    margin-top: 2rem;
    float: left,
`;

export const PosterGalleryGrid = styled.div`
    float: left,
    margin-left: 2rem;
    margin-right: 1rem;
    padding-right: 10px;
    width: 100%;
    overflow-x: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: ${props => props.backgroundColor};
`;

export const PosterModal = styled.div`
    border-radius: 5px;
    height: 30%;
    position: absolute;
	background: rgba(0, 0, 0, 0.8);
	width: 100%;
	transition: 0.5s ease;
	opacity: 0;
	bottom: 0;
	font-size: 20px;
	padding: 20px;
	text-align: center;
`
export const NominateBtn = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    font-family: Roboto, sans-serif;
    border-radius: 20px;
    background-color: #D20404;
    color: #FFFFFF;
    padding: 15px;
    margin: 10px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: all .5s ease;
    &:hover{
        background-color: #BF2121;  
        transform: translateY(-.2rem) scale(1.01);
    }
    &:active{
        transform: translateY(.2rem);
    }
`