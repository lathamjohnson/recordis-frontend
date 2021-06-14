import React from 'react';

function Input({handleSearch, handleChange}) {
    return (
        <div className='input'>
            <h2>Find the albums you've been looking for</h2>
            <form onSubmit={(e) => handleSearch(e)}>
                <input onChange={handleChange} type="text" placeholder="Artists..."/>
            </form>
        </div>
    );
}

export default Input;