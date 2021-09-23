import React from 'react';
import { ButtonWrapper } from './styled/Button.css';

const Button = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement>) => (
  <ButtonWrapper type="button" className="Button" {...rest}>
    {children}
  </ButtonWrapper>
);

export default Button;
