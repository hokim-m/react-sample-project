import React from 'react';

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
                                        <a href="#">Main</a></li>
                                <li>
                                        <a href="all">All Companies</a>
                                </li>
                        </ul>
                </div>
        </nav>;
};


export default HeaderView;