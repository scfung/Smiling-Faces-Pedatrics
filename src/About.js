import { Card, Grid, Typography } from '@mui/material';
import { blue, red, yellow} from '@mui/material/colors';
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
            minHeight: 700,
            minWidth: 300,
            backgroundColor: "primary.main",
            padding: 1,
        }}>
            <Grid2>
                 <img src='https://glomoderndental.com/wp-content/uploads/2021/05/why-smiles-are-important-for-kids.jpg' style={{
                    maxWidth: 225,
                    maxHeight: 225,
                    float: 'right'
                }}></img>
            
                <Typography variant='h2' sx={{
                    padding:1,
                    
                }}>
                    Our Mission
                </Typography>
        
                <Typography variant='h3'sx={{
                    padding:1,
                    maxWidth: 1000,
                }}>
                   Our clinic treats childrens starting from two years and older. We perform routine health checkups for children, administer immunizations, along with diagonsing and treating illnesses in children.
                   We work closely with parents and guardians to provide guidance on nutrition, exercise, and other aspects of their child's developement.
                   We also teach parents and guardians about understanding their child's health status and needs.
                   Our clinic has over three decades of collective experience in pediatrics, with our experienced doctors. 
                </Typography>
            </Grid2>
            
            <Grid2 xs={6} md={8} style={{ justifyContent: "space-around", display: "flex",}} sx={{paddingTop: 10}}>
            <Card sx={{ maxWidth: 450, minWidth: 300}} >
                <CardMedia
                    sx={{ minHeight: 300,
                        minWidth: 300}} 
                        image="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                    title='Dr. Sacks'/>
                <CardContent>
                    <Typography gutterBottom variant="h3">
                        Dr. Justin Sacks
                    </Typography>
                    <Typography variant="h3" >
                        A pediatrican that completed his medical degree from the School of Medicine at the University of Washington. He specializes with children with special needs, including ADHD, dyslexia, and autism. 
                        He has been working with children for over four years now and is considered an exceptional doctor by his patients.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card sx={{ maxWidth: 450, minWidth: 300}} >
                <CardMedia
                    sx={{ minHeight: 300,
                        minWidth: 300}} 
                        image="https://www.stockvault.net/data/2015/09/01/177580/preview16.jpg"
                    title='Dr. Lawrence'/>
                <CardContent>
                    <Typography gutterBottom variant="h3">
                        Dr. Jimmy Lawrence
                    </Typography>
                    <Typography variant="h3" >
                        The leading pediatrican at this clinic and graduated from the School of Medicine at Johns Hopkins University.
                        He specializes in primary care, including treating illnesses and immunizations, for infants, toddler, and children.
                        Dr. Lawrence has owned this clinic for over a decade and has been in pediatrics for almost twenty years.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 450, minWidth: 400}} >
                <CardMedia
                    sx={{ minHeight: 300,
                        minWidth: 300}} 
                        image="https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg"
                    title='Dr. Garcia'/>
                <CardContent>
                    <Typography gutterBottom variant="h3">
                        Dr. Maria Garcia
                    </Typography>
                    <Typography variant="h3" >
                        A pediatrican that graduated from the School of Medicine at Duke University.
                        She specializes in adolescent medicine, help children deal with their transitions to adults. 
                        This includes eating disorderss, sports medicine, and sexual health. 
                        Dr. Garcia has been working in this field for just under three years.
                    </Typography>
                </CardContent>
            </Card>
            </Grid2>
            
            
        </Grid2>
        </ThemeProvider>
    )
}

export default About;