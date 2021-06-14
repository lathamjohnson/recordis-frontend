import React, { useEffect } from 'react';
import Input from './Input';

function Home({handleChange, handleSearch}) {

    return (
        <div>
            <Input handleSearch={handleSearch} handleChange={handleChange}/>
        </div>
    );
}

export default Home;