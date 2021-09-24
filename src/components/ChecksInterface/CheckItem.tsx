import React from 'react';

import {
  CheckItemWrapper,
  Description,
  LeftButton,
  RightButton,
} from './styled/CheckItem.css';

export interface CheckItemType {
  id: string;
  priority: number;
  description: string;
  value?: boolean;
}

interface CheckItemProps extends CheckItemType {
  disabled: boolean;
  updateCheck: (id: string, value: boolean) => void;
}

export default function CheckItem({
  id,
  description,
  value,
  disabled,
  updateCheck,
}: CheckItemProps) {
  const onChange = (val: boolean) => {
    updateCheck(id, val);
  };

  return (
    <CheckItemWrapper className={disabled ? 'disabled' : ''}>
      <Description>{description}</Description>
      <LeftButton
        className={value !== undefined && value ? 'on' : 'off'}
        onClick={() => onChange(true)}
        disabled={disabled}
      >
        Yes
      </LeftButton>
      <RightButton
        className={value !== undefined && !value ? 'on' : 'off'}
        onClick={() => onChange(false)}
        disabled={disabled}
      >
        No
      </RightButton>
    </CheckItemWrapper>
  );
}
