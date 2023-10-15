import CustomNavBar from '../components/Navbar';
import React, { useEffect } from 'react';
import { checkAuthenticated } from '../actions/auth';
import { connect } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CSRFToken from '../components/CSRFToken';

const Dashboard = ({ checkAuthenticated, isAuthenticated }) => {
    const { username } = useParams(); 
    

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        
    };

    return isAuthenticated ? (
        <div className='container mt-5'>
            <CustomNavBar />
            <CSRFToken />
            <h1>Jesteś zalogowany jako: {username}</h1>
        </div>
    ) : (
        <Navigate to="/login" />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { checkAuthenticated })(Dashboard);
