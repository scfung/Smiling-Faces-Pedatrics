import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';
import './App.css';

function InvalidURL() {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Error 404</h1>
                <Link to="/">
                    <Typography sx={{textAlign:'center'}}>
                     Go to home page
                     </Typography>
                </Link>
        </div>
    );
}

export default InvalidURL;