import * as React from 'react';
import '../styles/loader.css';

const Loader = ({}) => {
    return (
        <div className="loader">
            <div className="loader-inner">
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
