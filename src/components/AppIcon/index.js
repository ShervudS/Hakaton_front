import React from 'react';

import Icon_check from '_images/icons/icon_check.svg';
import Icon_close from '_images/icons/icon_close.svg';
import Icon_btc from '_images/icons/icon_btc.svg';
import Icon_eth from '_images/icons/icon_eth.svg';
import Icon_gosuslugi from '_images/icons/icon_gosuslugi.svg'

export const AppIcon = ({name}) => {
    const icons = {
        check: <Icon_check/>,
        close: <Icon_close/>,
        btc: <Icon_btc/>,
        eth: <Icon_eth/>,
        gosuslugi: <Icon_gosuslugi/>
    };

    return icons[name];
};
