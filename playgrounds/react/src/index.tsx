import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../../packages/react';
import 'scss/lib/Buttons.css'

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Button label="Example Button"></Button>
    </div>,
    document.querySelector('#root')
)