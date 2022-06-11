import React from 'react';

import Icon_check from '_images/icons/icon_check.svg';
import Icon_close from '_images/icons/icon_close.svg';
import Icon_search from '_images/icons/icon_search.svg';
import Icon_user from '_images/icons/icon_user.svg';
import Icon_gosuslugi from '_images/icons/icon_gosuslugi.svg'

export const AppIcon = ({name}) => {
    const icons = {
        check: <Icon_check/>,
        close: <Icon_close/>,
        search: <Icon_search/>,
        user: <Icon_user/>,
        gosuslugi: <Icon_gosuslugi/>
    };

    return icons[name];
};
