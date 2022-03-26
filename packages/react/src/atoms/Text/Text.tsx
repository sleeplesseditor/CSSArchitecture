import * as React from 'react'
import FontSize from '../../../../foundation/src/FontSizes';

export interface TextProps {
    size?: keyof typeof FontSize
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text;