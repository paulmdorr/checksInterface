import React from 'react';

import CheckItem, { CheckItemProps } from './CheckItem';
import { ContentWrapper, ListWrapper } from './styled/ChecksList.css';

export interface ChecksListProps {
  checks: Array<CheckItemProps>;
}

export default function ChecksList({ checks }: ChecksListProps) {
  return (
    <ContentWrapper>
      <ListWrapper>
        {checks.map((check) => (
          <CheckItem {...check} key={check.id} />
        ))}
      </ListWrapper>
    </ContentWrapper>
  );
}
