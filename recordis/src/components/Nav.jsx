import React from 'react';

function Nav({user}) {
    return (
        <div>
            <span className="nav-head">
            <h1>Recordis</h1>
            {user ? <h4>Logged in as <span>{user.User.display_name}</span></h4> : <h4>Not logged in</h4>}
            </span>
        </div>
    );
}

export default Nav;