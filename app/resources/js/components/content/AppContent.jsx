import React from 'react';

import CountClicker from './count-clicker/CountClicker'

export default function AppContent() {
    return (
        <section className="content">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l4 xl3">
                        <CountClicker maxValue={7} minValue={0}/>
                    </div>
                    <div className="col s12 m6 l4 xl3">
                        <CountClicker maxValue={0} minValue={-7}/>
                    </div>
                    <div className="col s12 m6 l4 xl3">
                        <CountClicker/>
                    </div>
                    <div className="col s12 m6 l4 xl3">
                        <CountClicker maxValue={10} minValue={0} startValue={5}/>
                    </div>
                </div>
            </div>
        </section>
    );
}