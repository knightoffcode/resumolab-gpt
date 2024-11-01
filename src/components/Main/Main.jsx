import React from 'react';
import Aside from '../Aside';
import Chat from '../Chat';

/**
 * Main Component
 * 
 * This component serves as the main content area of the application.
 * It includes the sidebar (Aside) for navigation and the chat interface
 * (Chat) for user interactions. The layout is structured to provide a
 * cohesive user experience, with the sidebar and chat components 
 * displayed side by side.
 * 
 * @returns {JSX.Element} The JSX element representing the main content area.
 */

function Main() {

    return (
        <div className="main__content">
            <div className="main__wrapper">
                <Aside />
                <div className="main__chat">
                    <Chat />
                </div>
            </div>
        </div>
    );
};

export default Main;
