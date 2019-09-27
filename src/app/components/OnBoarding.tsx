import * as React from 'react';
import Header from './Header.tsx';
import Link from './Link.tsx';
import '../styles/ui.css';

const OnBoarding = ({onFinish}) => {
    const onStart = () => {
        parent.postMessage({pluginMessage: {type: 'set-on-boarding-cookie'}}, '*');
    };

    return (
        <div>
            <Header
                title="Welcome on board"
                description="Let us introduce you some tips before you start using our plugin."
            />
            <div style={{margin: '0 auto', width: '350px', textAlign: 'left'}}>
                <h4>🔥 How to generate your Attention Heatmap:</h4>
                <ol>
                    <li>Select an Artboard</li>
                    <li>Run the plugin</li>
                </ol>
            </div>

            <div style={{margin: '0 auto', width: '350px', textAlign: 'left', marginBottom: '2rem'}}>
                <h4>📦 How to create Areas of Interest:</h4>
                <ol>
                    <li>Create a Rectangle named AOI</li>
                    <li>Select an Artboard</li>
                    <li>Run the plugin</li>
                </ol>
            </div>

            <button onClick={onStart}>Let's start</button>

            <sup
                style={{
                    display: 'block',
                    margin: '2rem auto 0 auto',
                    // textAlign: 'right',
                    color: '#333',
                }}
            >
                Learn more about the usage of our plugin{' '}
                <Link
                    text="here"
                    to="https://www.notion.so/visualeyes/VisualEyes-Cheatsheet-9c30a263a02b4402ac841396b03bd382"
                />
            </sup>
        </div>
    );
};

export default OnBoarding;
