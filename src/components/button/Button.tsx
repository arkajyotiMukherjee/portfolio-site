import styled from "styled-components";

// Default Button Styles
const Button = styled.button`
  height: 3rem;
  min-width: 10rem;
  width: ${props => (props.theme.screens.sm ? "100%" : "18rem")};
  border: none;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textSecondary};
  border-radius: 0.25rem;
  font-size: ${props => props.theme.fontSize.body2};
  cursor: pointer;
`;

export { Button };
