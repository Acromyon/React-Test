import React from 'react';

import AppHeader from './header/AppHeader';
import AppContent from './content/AppContent';
import AppFooter from './footer/AppFooter';

export default () => {
    return (
        <React.Fragment>
            <AppHeader/>
            <AppContent/>
            <AppFooter/>
        </React.Fragment>
    );
}