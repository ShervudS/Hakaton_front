import React from 'react';
import { AppIcon } from '_components/_ui/AppIcon';

export const ButtonClose = ({ onClick, styles }) => (
    <button type="button" className={styles} onClick={onClick}>
        <AppIcon name={'close'} />
    </button>
);
