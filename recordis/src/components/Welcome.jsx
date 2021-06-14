import React from 'react';
import Login from './Login'
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <div className='welcome'>
            <h2>Recordis is a new way to discover albums.</h2>
            <Login authenticateSpotify={props.authenticateSpotify}/>
        </div>
    );
}

export default Welcome;