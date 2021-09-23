import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  user-select: none;
  border: 2px solid;
  background-color: ${(props) => props.theme.mainColor};
  color: white;

  position: relative;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  cursor: pointer;

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
