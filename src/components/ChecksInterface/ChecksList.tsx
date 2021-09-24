import React, { useEffect, useState } from 'react';

import CheckItem, { CheckItemType } from './CheckItem';
import { ContentWrapper, ListWrapper } from './styled/ChecksList.css';

export interface ChecksListProps {
  checks: Array<CheckItemType>;
  updateCheck: (id: string, value: boolean) => void;
}

export default function ChecksList({ checks, updateCheck }: ChecksListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedChecks = checks.sort((a: CheckItemType, b: CheckItemType) =>
    a.priority > b.priority ? 1 : 0,
  );

  const getFormattedChecks = () => {
    let thereIsANo = false;
    let lastCheck: CheckItemType;

    return sortedChecks.map((check, index) => {
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
          active={currentIndex === index}
        />
      );
    });
  };

  useEffect(() => {
    const onKeyUp = (ev: KeyboardEvent) => {
      switch (ev.key) {
        case 'ArrowUp':
          setCurrentIndex((value) => (value > 0 ? value - 1 : 0));
          break;
        case 'ArrowDown':
          setCurrentIndex((value) => {
            if (
              sortedChecks[value].value === undefined ||
              sortedChecks[value].value === false ||
              value === sortedChecks.length - 1
            ) {
              return value;
            }
            return value + 1;
          });
          break;
        case '1':
          if (sortedChecks.length)
            updateCheck(sortedChecks[currentIndex].id, true);
          break;
        case '2':
          if (sortedChecks.length)
            updateCheck(sortedChecks[currentIndex].id, false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keyup', onKeyUp, false);

    return () => {
      window.removeEventListener('keyup', onKeyUp, false);
    };
  }, [currentIndex, sortedChecks]);

  return (
    <ContentWrapper>
      <ListWrapper>{getFormattedChecks()}</ListWrapper>
    </ContentWrapper>
  );
}
