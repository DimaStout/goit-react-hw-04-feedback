import { TitleSection, SectionField } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionField>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionField>
  );
};
