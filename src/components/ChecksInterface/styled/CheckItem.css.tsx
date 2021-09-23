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
`;

const Description = styled.p`
  margin: 0 0 10px 0;
`;

const YesNoButton = styled(Button)`
  border-color: ${(props) => props.theme.mainColor};
  height: 30px;

  &[data-value='undefined'],
  &[data-value='false'] {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainColor};
  }

  &[data-value='true'] {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${(props) => props.theme.mainColor};
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
