import React from 'react';
import './App.css';
import MainController from './controller/mainController';
import HeaderView from './view/headerView';

function App() {
        return <div>
                <HeaderView/>
                <div className="App-container">
                        <MainController/>
                </div>

        </div>;
}

export default App;
