import React from 'react';

export default function AppHeader() {
    return (
        <header className="header">
            <nav className="teal">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#"
                           className="brand-logo right">My React App</a>
                        <ul id="nav-mobile"
                            className="left hide-on-med-and-down">
                            <li><a href="#">CountClicker</a></li>
                            <li><a href="#">TotalCount</a></li>
                            <li><a href="#">NextLesson</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}