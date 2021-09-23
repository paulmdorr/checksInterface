import React, { useState } from 'react';

import {
  CheckItemWrapper,
  Description,
  LeftButton,
  RightButton,
} from './CheckItem.css';

export interface CheckItemProps {
  id: string;
  priority: number;
  description: string;
  value?: boolean;
}

export default function CheckItem({ description, value }: CheckItemProps) {
  const [checked, setChecked] = useState(value);

  const onChange = (val: boolean) => {
    setChecked(val);
  };

  return (
    <CheckItemWrapper>
      <Description>{description}</Description>
      <LeftButton data-value={checked} onClick={() => onChange(true)}>
        Yes
      </LeftButton>
      <RightButton
        data-value={checked !== undefined && !checked}
        onClick={() => onChange(false)}
      >
        No
      </RightButton>
    </CheckItemWrapper>
  );
}
