import { Card, Container, Grid, Typography } from '@mui/material';
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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';

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
            fontFamily: "serif",
        },
    }
    
});

const doctors = [
    {
      value: 'Dr. James Sacks',
      label: 'Dr. James Sacks',
    },
    {
      value: 'Dr. Jimmy Lawrence',  
      label: 'Dr. Jimmy Lawrence',
    },
    {
      value: 'Dr. Maria Garcia',  
      label: 'Dr. Maria Garcia',
    },
  ];

function Appointments(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return(
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{backgroundColor: 'primary.main', minHeight: 700, minWidth: 300}}>
                <Grid2 sx= {{
                    minHeight: 700,
                    minWidth: 300,
                    backgroundColor: "primary.main",
                    padding: 1,
                    }}>
                    <Grid2 xs={6} md={8} style={{display: "flex", justifyContent: 'center' }}>
                        <Typography variant='h2' sx={{maxWidth: 400, padding: 5}}>
                            If you need to see our doctors, make an appointment right here. 
                        </Typography>
                    </Grid2>
                    
                    <Grid2 xs={6} md={8} style={{display: "flex", justifyContent: 'center' }}>  
                    <Button variant="contained" onClick={handleClickOpen} sx={{color: 'black', justifyContent: "center"}}>
                        Click here to make an appointment.
                    </Button>
                     <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Appointment Date</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                    Please enter patient's name and desired appointment date. Appointments can only be changed through phone or email.
                    </DialogContentText>
                    
                    <TextField
                    sx={{padding:1}}
                    required
                    id="outlined-required"
                    label="First Name"
                    />

                    <TextField
                    sx={{padding:1}}
                    required
                    id="outlined-required"
                    label="Last Name"
                    />
                     <TextField
                        sx={{padding:1}}
                        select
                        label="Doctor"
                        helperText="Please select your doctor"
                        >
                        {doctors.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{padding:1}} />
                    </LocalizationProvider>
                    </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} sx={{color: 'black'}}>Cancel</Button>
                            <Button onClick={handleClose} sx={{color: 'black'}}>Confirm</Button>
                        </DialogActions>
                    </Dialog>
                    
                    </Grid2>
                </Grid2>
                </Box>
            </ThemeProvider>
        
        </>
    )
}

export default Appointments