import React, { useEffect, useState, useRef } from 'react';

import { fetchChecks } from '../../api';
import ChecksList from './ChecksList';
import { CheckItemType } from './CheckItem';
import {
  ContentWrapper,
  Column,
  InfoBox,
  ErrorBox,
} from './styled/ChecksInterface.css';

const SECONDS_TO_RETRY = 5;

export default function ChecksInterface() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checks, setChecks] = useState<Array<CheckItemType>>([]);
  const [retryTime, setRetryTime] = useState(0);
  const timer = useRef<number>();

  const tryToFetchChecks = async () => {
    try {
      setIsLoading(true);
      setChecks(await fetchChecks());
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        timer.current = window.setInterval(
          () => setRetryTime((value) => value + 1),
          1000,
        );
      }
    }
  };

  const updateCheck = (id: string, value: boolean) => {
    setChecks((currentChecks) =>
      currentChecks.map((check) =>
        check.id === id ? { ...check, value } : check,
      ),
    );
  };

  useEffect(() => {
    tryToFetchChecks();
  }, []);

  useEffect(() => {
    if (retryTime === SECONDS_TO_RETRY) {
      clearInterval(timer.current);
      setError('');
      setRetryTime(0);
      tryToFetchChecks();
    }
  }, [retryTime]);

  const getContent = () => {
    if (error) {
      return (
        <ErrorBox>
          {error}... Retrying in {SECONDS_TO_RETRY - retryTime}
        </ErrorBox>
      );
    }

    if (isLoading) {
      return <InfoBox>Loading checks...</InfoBox>;
    }

    return <ChecksList checks={checks} updateCheck={updateCheck} />;
  };

  return (
    <ContentWrapper>
      <Column>
        <h1>Checks Interface</h1>
        {getContent()}
      </Column>
    </ContentWrapper>
  );
}
