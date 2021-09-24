import React, { useEffect, useState, useRef } from 'react';

import { fetchChecks, submitCheckResults } from '../../api';
import ChecksList from './ChecksList';
import { CheckItemType } from './CheckItem';
import {
  ContentWrapper,
  Column,
  InfoBox,
  ErrorBox,
  ButtonContainer,
  SubmitButton,
} from './styled/ChecksInterface.css';

const SECONDS_TO_RETRY = 5;

export default function ChecksInterface() {
  const [fetchingError, setFetchingError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checks, setChecks] = useState<Array<CheckItemType>>([]);
  const [retryTime, setRetryTime] = useState(0);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const timer = useRef<number>();

  const tryToFetchChecks = async () => {
    try {
      setIsLoading(true);
      setChecks(await fetchChecks());
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setFetchingError(e.message);
        timer.current = window.setInterval(
          () => setRetryTime((value) => value + 1),
          1000,
        );
      }
    }
  };

  const tryToSubmit = async () => {
    try {
      setSubmittingError('');
      setSubmitted(false);
      setIsSubmitting(true);
      await submitCheckResults(
        checks.map(({ id, value }) => ({
          checkId: id,
          result: value ? 'yes' : 'no',
        })),
      );
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (e) {
      if (e instanceof Error) {
        setIsSubmitting(false);
        setSubmittingError(e.message);
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
      setFetchingError('');
      setRetryTime(0);
      tryToFetchChecks();
    }
  }, [retryTime]);

  const getContent = () => {
    if (fetchingError) {
      return (
        <ErrorBox>
          {fetchingError}... Retrying in {SECONDS_TO_RETRY - retryTime}
        </ErrorBox>
      );
    }

    if (isLoading) {
      return <InfoBox>Loading checks...</InfoBox>;
    }

    return (
      <>
        <ChecksList
          checks={checks}
          updateCheck={updateCheck}
          setSubmitEnabled={setSubmitEnabled}
        />
        <ButtonContainer>
          <SubmitButton disabled={!submitEnabled} onClick={tryToSubmit}>
            Submit
          </SubmitButton>
        </ButtonContainer>
        {submittingError && (
          <ErrorBox>{submittingError}. Try again later.</ErrorBox>
        )}
        {isSubmitting && <InfoBox>Submitting checks...</InfoBox>}
        {submitted && <InfoBox>Submitted successfully!</InfoBox>}
      </>
    );
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
