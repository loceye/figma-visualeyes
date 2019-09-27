import * as React from 'react';
import '../styles/ui.css';

const Link = ({to, text}) => {
    return (
        <span id="link" onClick={() => window.open(to, '_system')}>
            {text}
        </span>
    );
};

export default Link;
