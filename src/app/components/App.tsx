import * as React from 'react';
import Header from './Header.tsx';
import Link from './Link.tsx';
import '../styles/ui.css';
import OnBoarding from './OnBoarding';
import SetApiKey from './SetApiKey';
import Loader from './Loader.tsx';
import {postImage} from '../utils/api';

const App = ({}) => {
    const [apiKey, setApiKey] = React.useState('');
    const [isOnBoarding, setIsOnBoarding] = React.useState(false);
    const [isSetApiKey, setIsSetApiKey] = React.useState(false);

    React.useEffect(() => {
        window.onmessage = event => {
            const {type} = event.data.pluginMessage;

            if (type === 'set-previous-api-key') {
                const {previousApiKey} = event.data.pluginMessage;
                setApiKey(previousApiKey);
                setIsSetApiKey(true);
            } else if (type === 'on-boarding') {
                setIsOnBoarding(true);
            } else if (type === 'ping') {
                const {message} = event.data.pluginMessage;
                parent.postMessage({pluginMessage: {type: 'pong', message}}, '*');
            } else if (type === 'post-image') {
                const {apiKey, image, hasAOI, aoi} = event.data.pluginMessage;

                var formData = new FormData();
                formData.append('image', image + '');
                formData.append('svg', 'true');
                formData.append('platform', 'figma');
                if (hasAOI) {
                    formData.append('aoi', JSON.stringify(aoi));
                }

                const token = 'Token ' + apiKey;

                postImage(formData, token)
                    .then(async svg => {
                        const bytes = await new Promise((resolve, reject) => {
                            const img = new window.Image();
                            img.crossOrigin = 'Anonymous';
                            img.onload = () => {
                                const {width, height} = img;
                                const canvas = document.createElement('canvas');
                                const context = canvas.getContext('2d');
                                canvas.width = width;
                                canvas.height = height;
                                context.clearRect(0, 0, canvas.width, canvas.height);
                                context.drawImage(img, 0, 0, width, height);
                                canvas.toBlob(blob => {
                                    const reader = new FileReader();
                                    reader.onload = () => resolve(new Uint8Array(reader.result));
                                    reader.onerror = () => reject('Could not read from blob');
                                    reader.readAsArrayBuffer(blob);
                                });
                            };
                            img.onerror = () => reject(`Could not decode bytes due to an error`);
                            img.src =
                                'https://api.visualeyes.design/image/generic-unlimited_d7afe0a8e05f11e982c42a6425df7a1e.png';
                        });

                        parent.postMessage({pluginMessage: {type: 'svg-result', svg, bytes}}, '*');
                    })
                    .catch(error => {
                        parent.postMessage({pluginMessage: {type: 'request-error', error}}, '*');
                    });
            }
        };
    }, []);

    return (
        <div>
            {!isOnBoarding && !isSetApiKey && <Loader />}
            {isOnBoarding && (
                <OnBoarding
                    onFinish={() => {
                        setIsOnBoarding(false);
                        setIsSetApiKey(true);
                    }}
                />
            )}
            {isSetApiKey && <SetApiKey apiKey={apiKey} setApiKey={setApiKey} />}
        </div>
    );
};

export default App;
