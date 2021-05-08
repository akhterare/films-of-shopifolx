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
    padding-bottom: 20px;
`

export const PosterGalleryGrid = styled.div`
    background-color: ${props => props.backgroundColor};
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 50px;
    padding: 20px;
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