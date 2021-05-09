import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';

export const NominationModalContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;/* 
    margin-top: 10rem;
`;

export const StyledModal = styled(Modal)`
    background: rgba(79, 79, 79, 0.95);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    height: 150px;  
    width: 400px;
    opacity: 98%;
    transform: scale(1.07);
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