import { createTheme } from "@mui/material";

const theme=createTheme({
    typography:{
        fontFamily:"Lato"
    },
    palette:{
        primary:{
            light:"#45c09f",
            main:"#999999",
            dark:"#00845c",
            contrastText:"#fff"
        }
    }
});
export default theme