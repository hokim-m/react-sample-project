import React from 'react';
import axios from '../model/axios';
import {setCompaniesList} from '../model/actions';
import store from '../model/store';
import CompanyCardView from '../view/companyCardView';


class MainController extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        data: []
                };
        }

        componentDidMount() {
                store.subscribe(() => this.setState({data: store.getState().companies}));

                axios({url: 'companies'}).then(result => {
                        //Using first 10 companies, because no data about Netflix, Amazon, AT&T Facebook, Twitter as have been asked
                        let companies = result.companies.slice(0, 10);
                        console.log(companies);
                        store.dispatch(setCompaniesList(companies));
                });
        }

        render() {
                const data = this.state.data;
                return <div>
                        {
                                data.map((cp, i) => {
                                        return <div key={i}>
                                                <CompanyCardView data={cp}/>
                                        </div>;
                                })

                        }
                </div>;
        }
}

export default MainController;