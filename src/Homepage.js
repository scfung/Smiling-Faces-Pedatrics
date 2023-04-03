import { Typography } from '@mui/material';
import { blue, red, yellow} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { color, textAlign } from '@mui/system';
import {Box} from '@mui/material';
import { Stack } from '@mui/material';
const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
        },
        secondary: red,
    },
    typography: {
        h1:{
            fontSize: "3rem",
            fontWeight: 600,
            fontFamily: "cursive",
        },
        h2:{
            fontSize: "2.5rem",
            fontWeight: 400,
            fontFamily: "serif"
        },
        h3:{
            fontSize: "1.5rem",
            fontWeight: 200,
            fontFamily: "serif",
        },
    }
    
});
function Homepage(){
    return(
        <>
        
        <ThemeProvider theme={theme}>
            <Box sx={{
            minHeight: 700,
            backgroundColor: 'primary.main',
        }}>
            <Box sx={{
                height: 100,
                backgroundColor: "primary.main",
                padding: 2,

                }}>

                <Typography variant='h1'
                    sx= {{textAlign:"center", color: "secondary.main", padding: "20px"}}>Welcome to Smiling Faces Pediatrics
                </Typography>
            </Box>
            <Box sx= {{
                
                backgroundColor: "primary.main",
                padding: 1,
            }}>
                

                    <img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-google-maps-not-updating-location-600x341.png" style={{
                        maxWidth: 200,
                        maxHeight: 200,
                        float: 'right'
                    }}></img>
                    <Typography variant='h2' sx={{
                    padding:1,
                    }}>
                        Our Location
                    </Typography> 
                       
                  
                    
                <Typography variant='h3' sx={{
                    padding:1,
                    maxWidth: 1000,
                }}>
                    We are located at 333 Madison Avenue, New York, NY 10075, located near the Grand Central Terminal. Our office is accessible via the 4, 5, 6, 7, and S trains, as well as the Long Island Railroad. There are also parking garages within a five minute walk of our office.
                </Typography>
                
                
                    
                    <Typography variant='h2' sx={{
                        padding: 1,
                    }}>
                        Our Contact Info and Operating Hours
                    </Typography>

                    <img src="https://www.pngkit.com/png/detail/847-8476042_png-file-svg-contact-info-icon.png" style={{
                        maxWidth: 200,
                        maxHeight: 200,
                        float: 'right'
                    }}></img>
                    <Typography variant='h3' sx={{
                        padding: 1,
                        maxWidth: 1000,
                    }}>
                        We are open from 10:00 AM to 4:00 PM on the weekdays and from 9:00 AM to 1:00 PM on Saturdays. Our clinic is closed on Sundays. 
                    </Typography>

                    <Typography variant='h3' sx={{
                        padding: 1,
                        maxWidth: 1000,
                    }}>
                        Our clinic's phone number is <span style={{ fontWeight: 'bold' }}>718-345-1234</span> and is available during operating hours. We can be contacted through email at <span style={{ fontWeight: 'bold' }}>sfpediactrics@gmail.com</span>, our response time is typically with the same or next business day.
                    </Typography>
                
            </Box>
        </Box>
        </ThemeProvider>
        </>
    )
}

export default Homepage;