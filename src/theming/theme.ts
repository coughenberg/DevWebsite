import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { components } from "./components";

export const siteTheme = createTheme({
    components,
    palette,
})