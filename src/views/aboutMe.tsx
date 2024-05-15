import { ParagraphText } from "../components/paragraphText";
import { aboutMeTexts } from "../text";

export const AboutMeView = () => {
  return (
    <div>
      {aboutMeTexts.map((text, index) => (
        <ParagraphText key={`about-me-paragraph-${index}`}>
          {text}
        </ParagraphText>
      ))}
    </div>
  );
};
