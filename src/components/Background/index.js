import React from 'react';

export const Background = ({ className, style, src }) => (
    <div className={className} style={style}>
        <img src={src} alt={'background image'} />
    </div>
);
