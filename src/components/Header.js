import Box from '@mui/material/Box'
import "./header.css"
import {Avatar,Button,Stack} from "@mui/material"
import {useHistory} from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import MedicationIcon from '@mui/icons-material/Medication';
const Header=({childre,hasHiddenBtns})=>{
    const history=useHistory();
    const loginHandler=(e)=>{
          history.push('/login',{from:"Header"})
    }
    const registerHandler=(e)=>{
          history.push('/register',{from:"Header"})
    }

      if(hasHiddenBtns==true){
          return(
            <Box className='header'>
            <MedicationIcon/>
            <div className='lr-btns'>
            <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
        //   onClick={bttnPressed}
        >
          Back to explore
          
        </Button>
            </div>
            
       </Box>
          )
      }
    return(

        
        <Box className='header'>
             <MedicationIcon/>
             <div className='lr-btns'>
             <Button className='login-btn' variant='contained' onClick={loginHandler}>
                     login
             </Button>
             <Button className='login-btn' variant='contained' onClick={registerHandler}>
                     Register
             </Button>
             </div>
             
        </Box>
    )
}
export default Header;