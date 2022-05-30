import { Button,Stack,TextField } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import './Login.css'
const Login=()=>{
    return(

        <Box>
          <Header hasHiddenBtns={true}/>
       
        <Box className="content">
        <Stack spacing={2} className="form">
        <h2 className="title">Login</h2>
        <TextField
            id="username"
            label="username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            // onChange={userNameHandeler}
            // value={enteredUserName}
            fullWidth
            
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            title="password"
            name="password"
            type="password"
            // onChange={passwordHandler}
            // value={enteredPassword}
            fullWidth
            
          />
          <Button className="button" variant="contained">
              LOGIN
           </Button>
           <p className="secondary-action">
           Don’t have an account? Register now{" "}
             <a className="link" href="register">
             Register now
             </a>
          </p>
        </Stack>
      </Box>
      <Footer/>
      </Box>
    )
}
export default Login