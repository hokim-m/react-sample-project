import React from 'react';
import axios from '../model/axios';
import {setCompaniesList} from '../model/actions';
import store from '../model/store';
import {array_chunks} from '../model/helpers';
import CompanyCardView from '../view/companyCardView';

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
                let chunks = array_chunks(data, 5);
                console.log(chunks);
                return <div>
                        {
                                chunks.map((array, i) => {
                                        return <div className="row">
                                                {
                                                        array.map((cp, index) => {
                                                                return <div key={index}
                                                                            className={`col-md-2 ${index === 0 && 'col-md-offset-1'}`}>
                                                                        <CompanyCardView data={cp}/>
                                                                </div>;
                                                        })
                                                }
                                        </div>;
                                })

                        }
                </div>;
        }
}

export default MainController;