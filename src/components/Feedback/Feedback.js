import { ButtonItem, ButtonField } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonField>
      {options.map(item => (
        <ButtonItem
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </ButtonItem>
      ))}
    </ButtonField>
  );
};
