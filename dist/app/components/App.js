import * as React from 'react';
import '../styles/ui.css';
const App = ({}) => {
    const textbox = React.useRef(undefined);
    const countRef = React.useCallback((element) => {
        if (element)
            element.value = '5';
        textbox.current = element;
    }, []);
    const onCreate = React.useCallback(() => {
        const count = parseInt(textbox.current.value, 10);
        parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
    }, []);
    const onCancel = React.useCallback(() => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
    }, []);
    React.useEffect(() => {
        window.onmessage = (event) => {
            const { type, message } = event.data.pluginMessage;
            if (type === 'create-rectangles') {
                console.log(`Figma Says: ${message}`);
            }
            ;
        };
    }, []);
    return (React.createElement("div", null,
        React.createElement("img", { src: require('../assets/logo.svg') }),
        React.createElement("h2", null, "Rectangle Creator"),
        React.createElement("p", null,
            "Count: ",
            React.createElement("input", { ref: countRef })),
        React.createElement("button", { id: "create", onClick: onCreate }, "Create"),
        React.createElement("button", { onClick: onCancel }, "Cancel")));
};
export default App;
