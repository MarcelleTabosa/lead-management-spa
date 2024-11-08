import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;

    width: 100%;

    background: ${props => props.theme.secondary};
    color: ${props => props.theme.text};

    button {
        position: relative;

        width: 49.87%;
        padding: 15px 5px;
        
        font-weight: bold;

        cursor: pointer;
        border: none;
        background-color: ${props => props.theme.tertiary};
        color: ${props => props.theme.text};

        transition: background-color 0.3s;
    }

    button::after {
        position: absolute;
        content: '';

        width: 0; 
        height: 3px; 
        left: 50%; 
        bottom: -5px; 

        background-color: ${props => props.theme.primary}; 

        transition: width 0.5s, left 0.5s; 
    }

    button.active::after {
        width: 100%; 
        left: 0; 
    }
`;