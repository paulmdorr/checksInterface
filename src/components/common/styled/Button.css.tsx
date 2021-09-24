import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  border: 2px solid;
  border-radius: 4px;
  color: ${(props) => props.theme.secondaryColor};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  padding: 0 16px;
  position: relative;
  text-align: center;
  user-select: none;

  &:disabled {
    background-color: ${(props) => props.theme.disabledMainColor};
    color: ${(props) => props.theme.disabledSecondaryColor};
    cursor: not-allowed;
  }

  &:enabled:hover,
  &:enabled:focus {
    background-color: ${(props) => props.theme.highlightColor};
  }
`;

export { ButtonWrapper };
