import React from 'react';
import Aside from '../Aside';
import Chat from '../Chat';

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
