import styled from "styled-components";

const Container = styled.button<{
    theme: "dark" | "light", 
    size: "small" | "medium" | "large"
}>`
  width: 50%;
  padding: 15px 5px;
  margin-right: 3px;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  color: black;
  font-weight: bold;
  transition: background-color 0.3s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 50%; 
    bottom: -5px; 
    width: 0; 
    height: 3px; 
    background-color: #eb7a1e; 
    transition: width 0.5s, left 0.5s; 
  } 

  &:active::after {
    width: 100%; 
    left: 0; 
  }
`;

export default Container;