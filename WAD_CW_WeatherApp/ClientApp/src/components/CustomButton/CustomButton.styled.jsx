import styled, {css} from 'styled-components';

const buttonSytles = css`
    background-color: black;
    color: white;
    border: none;
    
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const InvertedButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover {
        background-color: black;
        border: none;
        color: white;
    }
`;

const DefaultButton = css`
    background-color: #4285f4;
    color: white;
    border: none;

      &:hover {
        border: none;
        background-color: #357ae8;
      }
`;

const getButtonStyles = props=>{
    if(props.default){
        return DefaultButton;
    }

    return props.inverted ? InvertedButton : buttonSytles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;

    ${getButtonStyles}
  
`;