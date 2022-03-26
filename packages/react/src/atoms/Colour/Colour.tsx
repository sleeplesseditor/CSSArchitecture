import * as React from "react";
import Spacing from '../../foundations/Spacing';

interface ColourProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}

const Colour: React.FC<ColourProps> = ({ height=Spacing.sm, hexCode, width=Spacing.sm }) => {
    const className = `dse-width=${width} dse-height-${height}`
    return <div
        className={className}
        style={{ 
            backgroundColor: hexCode
        }}
    ></div>
}

export default Colour;