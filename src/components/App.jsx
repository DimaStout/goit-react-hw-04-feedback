import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleBtnFeedback = item => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [item]: prevFeedback[item] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = feedback;

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(feedback)}
          onLeaveFeedback={handleBtnFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};

export default App;
