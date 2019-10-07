import React from 'react';
import {Link} from 'react-router-dom';

const HeaderView = () => {
        return <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                        <div className="navbar-header">
                                <a className="navbar-brand">
                                        React Sample Project
                                </a>
                        </div>
                        <ul className="nav navbar-nav">
                                <li className="active">
                                        <Link to="/">Main</Link>
                                </li>
                                <li>
                                        <Link to="/all">All Companies</Link>
                                </li>
                        </ul>
                </div>
        </nav>;
};


export default HeaderView;