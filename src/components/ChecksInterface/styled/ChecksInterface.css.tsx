import styled from 'styled-components';

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoLightColor};
  color: ${(props) => props.theme.infoColor};
  border: 2px solid;
  border-color: ${(props) => props.theme.infoColor};
  border-radius: 4px;
  font-weight: bold;
  padding: 10px;
`;

const ErrorBox = styled(InfoBox)`
  background-color: ${(props) => props.theme.errorLightColor};
  color: ${(props) => props.theme.errorColor};
  border-color: ${(props) => props.theme.errorColor};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Column = styled.div`
  width: 400px;
`;

export { ContentWrapper, Column, InfoBox, ErrorBox };
