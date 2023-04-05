import { Card, Container, Grid, Typography } from '@mui/material';
import { blue, red, yellow, grey} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { color, textAlign } from '@mui/system';
import {Box} from '@mui/material';
import { Stack } from '@mui/material';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';


const theme = createTheme({
    palette: {
        primary: {
            main: yellow[400],
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
            fontFamily: "sans-serif",
        },
    }
    
});

function Reviews(){

    return(
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{backgroundColor: 'primary.main', minHeight: 700, minWidth: 300}}>
                    <Typography variant='h1' sx={{padding:3, textAlign: 'center'}}>
                        Hear about us from our patients!
                    </Typography>
                    <Box
                        sx={{
                        display: 'flex',
                        '& > :not(style)': {
                        m: 5,
                        width: 500,
                        height: 128,
                        
                        },
                        }}
                        >
                        <Paper variant="outlined">
                            <Typography variant='h3'>My son loves Dr. Sacks and his treatment on my son is phenomenal. - Jen</Typography>
                        </Paper>
                        <Paper variant="outlined">
                            <Typography variant='h3'>I have been going here since this clinic opened with my three children.
                            Dr. Lawrence is the best there is! - Daniela
                            </Typography>
                        </Paper>
                        <Paper variant="outlined">
                            <Typography variant='h3'>
                                Dr. Maria has taken care of my son through his eating disorder for over the past year! - Dean
                            </Typography>
                        </Paper>
                    </Box>
                    <Typography variant='h1' sx={{padding:3, textAlign:'center'}}>
                        Read more reviews over here!
                    </Typography>
                    <Grid2 style={{display:'flex', justifyContent:'center'}}>
                        <Button href="https://www.yelp.com/" variant='contained' sx={{display:'flex', textAlign:'center'}}>More reviews</Button>
                    </Grid2>
                </Box>
                
            </ThemeProvider>
        
        </>
    )
}

export default Reviews;