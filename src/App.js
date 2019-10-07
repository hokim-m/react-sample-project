import React from 'react';
import './App.css';
import MainController from './controller/mainController';
import CompaniesController from './controller/companiesController';
import CompanyInfoController from './controller/companyInfoController';

import HeaderView from './view/headerView';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

function App() {
        return <div>
                <HeaderView/>
                <div className="App-container">
                        <Route exact path="/" component={MainController}/>
                        <Route path="/all" component={CompaniesController}/>
                        <Route path="/company/:id" component={CompanyInfoController}/>
                </div>

        </div>;
}

const mapStateToProps = state => {
        return {
                companies: state.companies,
                comments: state.comments
        };
};

export default withRouter(connect(mapStateToProps, null)(App));
