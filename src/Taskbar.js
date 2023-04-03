import './Taskbar.css';

import Homepage from './Homepage';
import AboutUs from './About';
import Reviews from './Reviews';
import Appointments from './Appointment';
import InvalidURL from './InvalidURL';

import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom';

const linkStyle = {textDecoration: "none", color: "white"};
function Layout() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='about'>About Us</Link>                    
                    </li>
                    <li>
                        <Link style={linkStyle} to='reviews'>Reviews</Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='appointments'>Make an Appointment</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default function Taskbar(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Layout/>}>
                    <Route index element = {<Homepage/>}/>
                    <Route path="about" element={<AboutUs/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="appointments" element={<Appointments/>}/>
                    <Route path="*" element={<InvalidURL/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}