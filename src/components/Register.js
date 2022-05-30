import { Button,Stack,TextField } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import './Login.css'
const Register=()=>{
    return(

        <Box>
          <Header hasHiddenBtns={true}/>
       
        <Box className="content">
        <Stack spacing={2} className="form">
        <h2 className="title">Register</h2>
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
            helperText="Password must be atleast 6 charsters"
            // onChange={passwordHandler}
            // value={enteredPassword}
            fullWidth
            
          />
           <TextField
            id="confirmpassword"
            label="confirm password"
            variant="outlined"
            title="password"
            name="confirmpassword"
            type="password"
            // onChange={passwordHandler}
            // value={enteredPassword}
            fullWidth
            
          />
          <Button className="button" variant="contained">
              Register
           </Button>
           <p className="secondary-action">
        ALREADY REGISTERED? LOGIN NOW{" "}
             <a className="link" href="login">
                LOGIN
             </a>
          </p>
        </Stack>
      </Box>
      <Footer/>
      </Box>
    )
}
export default Register