import React from 'react';
import axios from '../model/axios';
import {setCompaniesList} from '../model/actions';
import store from '../model/store';
import CompaniesGridView from '../view/companiesGridView';

class MainController extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        data: [],
                        loading: true
                };
        }

        componentDidMount() {
                store.subscribe(() => this.setState({data: store.getState().companies, loading: false}));

                axios({url: 'companies'}).then(result => {
                        //Using first 10 companies, because no data about Netflix, Amazon, AT&T Facebook, Twitter as have been asked
                        let companies = result.companies.slice(0, 10);
                        console.log(companies);
                        store.dispatch(setCompaniesList(companies));
                });
        }

        render() {
                const {data, loading} = this.state;
                if (loading) {
                        return <div></div>;
                }

                const onCardClick = (data) => {
                        this.props.history.push(`/company/${data.ticker}`);
                };

                return <div>
                        <CompaniesGridView data={data}
                                           onClick={onCardClick}/>
                </div>;
        }
}

export default MainController;