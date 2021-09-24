import React from 'react';

import CheckItem, { CheckItemType } from './CheckItem';
import { ContentWrapper, ListWrapper } from './styled/ChecksList.css';

export interface ChecksListProps {
  checks: Array<CheckItemType>;
  updateCheck: (id: string, value: boolean) => void;
}

export default function ChecksList({ checks, updateCheck }: ChecksListProps) {
  const sortedChecks = checks.sort((a: CheckItemType, b: CheckItemType) =>
    a.priority > b.priority ? 1 : 0,
  );

  const getFormattedChecks = () => {
    let thereIsANo = false;
    let lastCheck: CheckItemType;

    return sortedChecks.map((check) => {
      const disabled =
        (lastCheck && lastCheck.value === undefined) || thereIsANo;
      lastCheck = check;

      if (check.value === false) {
        thereIsANo = true;
      }

      return (
        <CheckItem
          {...check}
          key={check.id}
          updateCheck={updateCheck}
          disabled={disabled}
        />
      );
    });
  };

  return (
    <ContentWrapper>
      <ListWrapper>{getFormattedChecks()}</ListWrapper>
    </ContentWrapper>
  );
}
