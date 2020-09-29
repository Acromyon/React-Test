import React from 'react';

import AppHeader from './header/AppHeader';
import AppContent from './content/AppContent';
import AppFooter from './footer/AppFooter';

export default function AppRoot() {
    return (
        <React.Fragment>
            <div className="wrapper teal lighten-5">
                <AppHeader/>
                <AppContent/>
            </div>
            <AppFooter/>
        </React.Fragment>
    );
}