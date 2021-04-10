import styled from "styled-components";

// Default Button Styles
const Button = styled.button`
  height: 3rem;
  min-width: 10rem;
  width: ${props => (props.theme.screens.sm ? "100%" : "18rem")};
  border: none;
  background: ${props => props.theme.colors.secondary};
  color: white;
  border-radius: 0.25rem;
  font-size: ${props => props.theme.fontSize.button};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

export { Button };
