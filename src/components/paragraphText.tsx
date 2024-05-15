import { Typography, styled } from "@mui/material";

export const ParagraphText = styled(Typography)({
  ":not(:last-child)": {
    marginBottom: "1em",
  },
});
