import * as React from 'react';

declare function require(path: string): any;

const Header = ({title, description, other}) => {
    return (
        <div id="header" style={{marginBottom: '2rem'}}>
            <img src={require('../assets/logo.svg')} style={{marginBottom: '2rem'}} />
            <h1>{title}</h1>
            <p>
                {description} {other}
            </p>
        </div>
    );
};

export default Header;
