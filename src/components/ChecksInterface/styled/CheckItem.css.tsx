import styled from 'styled-components';

import Button from '../../common/Button';

const CheckItemWrapper = styled.li`
  padding: 10px;

  &:focus {
    background-color: ${(props) => props.theme.highlightColor};
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }

  &.disabled {
    color: ${(props) => props.theme.disabledSecondaryColor};

    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }

  &.active {
    background-color: ${(props) => props.theme.highlightColor};
  }
`;

const Description = styled.p`
  margin: 0 0 10px 0;
`;

const YesNoButton = styled(Button)`
  border-color: ${(props) => props.theme.mainColor};
  height: 30px;

  &.off {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainColor};
  }

  &.on {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${(props) => props.theme.mainColor};
    }
  }

  &.on:disabled {
    background-color: ${(props) => props.theme.disabledSecondaryColor};
    border-color: ${(props) => props.theme.disabledSecondaryColor};
    color: ${(props) => props.theme.disabledMainColor};

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${(props) => props.theme.disabledSecondaryColor};
    }
  }

  &.off:disabled {
    background-color: ${(props) => props.theme.disabledMainColor};
    border-color: ${(props) => props.theme.disabledSecondaryColor};
    color: ${(props) => props.theme.disabledSecondaryColor};

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${(props) => props.theme.disabledMainColor};
    }
  }
`;

const LeftButton = styled(YesNoButton)`
  border-radius: 4px 0 0 4px;
  border-right: none;
`;

const RightButton = styled(YesNoButton)`
  border-radius: 0 4px 4px 0;
`;

export { CheckItemWrapper, Description, LeftButton, RightButton };
