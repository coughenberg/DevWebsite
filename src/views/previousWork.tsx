import { ParagraphText } from "../components/paragraphText";
import { previousWorkTexts } from "../text";

export const PreviousWorkView = () => {
  return (
    <div>
      {previousWorkTexts.map((text, index) => (
        <ParagraphText key={`previous-works-paragraph-${index}`}>
          {text}
        </ParagraphText>
      ))}
    </div>
  );
};
