import React from 'react';
import CustomNavBar from '../components/Navbar';
import {Link} from 'react-router-dom';


const Home = () => (
    <div className='container'>
        <CustomNavBar/>
       
        <div className='mt-5 p-5 bg-light'>
            <h1 className='display-4'>Witaj !</h1>
            <p className='lead'>
                Formularz rejestracji oraz logowania wraz z uwzględnieniem funkcjonalności autentykacji i wylogowania
            </p>
            <hr className='my-4' />
            <p>Kliknij przycisk aby przejść do logowania.</p>
            <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
        </div>
    </div>
);

export default Home;
