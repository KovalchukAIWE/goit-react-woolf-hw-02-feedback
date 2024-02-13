import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import styles from './Statistics.module.css';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  handleClick,
}) => {
  const options = ['good', 'neutral', 'bad'];

  const hasFeedback = total > 0;

  return (
    <div className={styles.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      {hasFeedback ? (
        <Section title="Statistics">
          <div>
            <p className={styles.text}>Good: {good}</p>
            <p className={styles.text}>Neutral: {neutral}</p>
            <p className={styles.text}>Feedback: {bad}</p>
            <p className={styles.text}>Total: {total}</p>
            <p className={styles.text}>
              Pisitive feedback: {positivePercentage}%
            </p>
          </div>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;
