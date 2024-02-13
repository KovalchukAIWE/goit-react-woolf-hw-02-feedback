import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
            className={styles.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
