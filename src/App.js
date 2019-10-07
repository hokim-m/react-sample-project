import React from 'react';
import './App.css';
import MainController from './controller/mainController';
import HeaderView from './view/headerView';

function App() {
        return <div>
                <HeaderView/>
                <MainController/>
        </div>;
}

export default App;
