import { Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import {Box} from '@mui/system'

import "./Home.css"
import Footer from './Footer'
const Home=()=>{

    return(

        <div>
            <Header/>
                 
             <Grid container>
                   <Grid item className='product-grid'>
                   <Box className="hero">
                        {/* <p className="hero-heading">
                              India’s <span className="hero-highlight">FASTEST DELIVERY</span>{" "}
                                to your door step
                        </p> */}
                    </Box>
                 </Grid>
             </Grid>
             <Footer/>
        </div>
    )
}
export default Home