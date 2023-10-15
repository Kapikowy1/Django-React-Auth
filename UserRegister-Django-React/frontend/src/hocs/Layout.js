import React, { useEffect,Fragment } from 'react';
import Navbar from '../components/Navbar'
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';


const Layout = ({children, checkAuthenticated,}) =>{
    useEffect(() => {
        checkAuthenticated();
        
    }, []);

    return(
        <Fragment>
            
            
        </Fragment>
    )
};

export default connect(null, { checkAuthenticated })(Layout);
