import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';


function Login({authenticateSpotify}) {

    return (
            <button className='login' onClick={() => {authenticateSpotify()}}>Login with Spotify</button>
    );
}

export default Login;