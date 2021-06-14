import React, { Link, useState, useEffect } from 'react';

function Results({albums}) {
    const [focus, setFocus] = useState()
    
    useEffect(() => {
        const alb = albums.splice(Math.floor(Math.random() * albums.length))
        setFocus(alb)
    }, [])

    // console.log(`RESULTS: ${albums}`)

    if(typeof focus == 'undefined'){
        return <h2>Loading...</h2>
    }
    else{
        return (
        <div>
            <img src={focus.image}/>
            <h2>{focus.name}</h2>
            <h3>{focus.artist}</h3>
        </div>
    );
    }
    
}

export default Results;