import { ParagraphText } from "../components/paragraphText";
import { projectsTexts } from "../text";

export const ProjectsView = () => {
  return (
    <div>
      {projectsTexts.map((text, index) => (
        <ParagraphText key={`projects-paragraph-${index}`}>
          {text}
        </ParagraphText>
      ))}
    </div>
  );
};
