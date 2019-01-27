import styled from "styled-components";

//styling using styled components
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  color: white;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.05s ease-in-out;
  &:hover {
    background-color: var(--mainWhite);
    color: black;
  }
`;

//we can have multiple buttons...
export const ButtonContainer2 = styled.button`
  text-transform: capitalize;
  color: black;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.05s ease-in-out;
  &:hover {
    background-color: var(--lightBlue);
  }
`;
