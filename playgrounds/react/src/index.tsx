import React from 'react';
import ReactDOM from 'react-dom';
import { Colour } from '../../../packages/react';

import 'scss/lib/Utilities.css';
import 'scss/lib/Text.css';
import 'scss/lib/Margin.css';
import 'scss/lib/global.css';

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Colour hexCode="#000"></Colour>
    </div>,
    document.querySelector('#root')
)