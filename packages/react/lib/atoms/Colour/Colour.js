import * as React from 'react';
import Spacing from '../../foundations/Spacing.js';

const Colour = ({ height = Spacing.sm, hexCode, width = Spacing.sm }) => {
    const className = `dse-width=${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: {
            backgroundColor: hexCode
        } });
};

export { Colour as default };
//# sourceMappingURL=Colour.js.map
