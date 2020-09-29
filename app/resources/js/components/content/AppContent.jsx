import React from 'react';

import CountClickerPage from './count-clicker/CountClickerPage'

export default function AppContent() {
    return (
        <section className="content">
            <div className="container">
                <CountClickerPage/>
            </div>
        </section>
    );
}