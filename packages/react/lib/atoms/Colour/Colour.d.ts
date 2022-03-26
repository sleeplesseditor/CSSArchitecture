import * as React from "react";
import Spacing from '../../foundations/Spacing';
interface ColourProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Colour: React.FC<ColourProps>;
export default Colour;
