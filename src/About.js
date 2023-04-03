import { Typography } from '@mui/material';
import { blue, red, yellow} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { color, textAlign } from '@mui/system';
import {Box} from '@mui/material';
import { Stack } from '@mui/material';

function About(){

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
                fontSize: "2rem",
                fontWeight: 400,
                fontFamily: "serif"
            },
            h3:{
                fontSize: "1.25rem",
                fontWeight: 200,
                fontFamily: "serif",
            },
        }
        
    });

    return(
        <ThemeProvider theme={theme}>
            <Grid2 sx= {{
            height: 1000,
            backgroundColor: "primary.main",
            padding: 1,
        }}>
            <Grid2 item xs={8}>
            <img src='https://glomoderndental.com/wp-content/uploads/2021/05/why-smiles-are-important-for-kids.jpg' style={{
                    maxWidth: 250,
                    maxHeight: 250,
                    float: 'right',
                }}></img>
                <Typography variant='h2' sx={{
                    padding:1,
                }}>
                    Our Mission
                </Typography>
        
                <Typography variant='h3'sx={{
                    padding:1,
                }}>
                   Our clinic treats childrens starting from two years and older. We perform routine health checkups for children, administer immunizations, along with diagonsing and treating illnesses in children.
                   We work closely with parents and guardians to provide guidance on nutrition, exercise, and other aspects of their child's developement.
                   We also teach parents and guardians about understanding their child's health status and needs.
                   Our clinic has over a decade of collective experience in pediatrics.
                </Typography>
            </Grid2>
        </Grid2>
        </ThemeProvider>
    )
}

export default About;