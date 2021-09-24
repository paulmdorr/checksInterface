import React from 'react';
import { ButtonWrapper } from './styled/Button.css';

const Button = ({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ButtonWrapper type="button" className="Button" {...rest}>
    {children}
  </ButtonWrapper>
);

export default Button;
