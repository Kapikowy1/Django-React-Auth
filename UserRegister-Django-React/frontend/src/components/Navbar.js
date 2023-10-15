import React,{Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const CustomNavBar = ({ isAuthenticated, logout })=> {

    const authLinks = (
        <Fragment>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
                <a className='nav-link' onClick={logout} href='#!'>Logout</a>
            </li>
        </Fragment>
    );

    const guestLinks=(
        <Fragment>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/register'>Register</NavLink>
            </li>
        </Fragment>
        
    );

    return(
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <Link className='navbar-brand' exact to='/'>Django-React Register and login </Link>
                
                <button 
                    className='navbar-toggler' 
                    type='button' data-bs-toggle='collapse' 
                    data-bs-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                         { isAuthenticated ? authLinks : guestLinks }
                    </ul>
                </div>
            </div>
        </nav>
    );    
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(CustomNavBar);
