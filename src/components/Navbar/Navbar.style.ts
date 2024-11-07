import styled from "styled-components";

export const Navbar = styled.nav` 
  display: flex;
  align-items: center;
  justify-content: end;

  padding: 0.5rem 2rem;

  background-color: ${(props) => props.theme.primary};
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const Li = styled.li`
  display: inline;
  padding: 0.5rem;

  a {
    color: ${(props) => props.theme.secondary};
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem;
  }

  &:hover {
    border-radius: 20px;

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};

    transition: background 0.5s;

    a {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: auto;
`;

export const ThemeToggleButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.secondary};
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    border-radius: 100px;

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};

    transition: background 0.5s;

    a {
      color: ${(props) => props.theme.primary};
    }
`;