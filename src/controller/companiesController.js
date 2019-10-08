import React from 'react';
import axios from '../model/axios';
import {debounce, sortArrayWithKey} from '../model/helpers';
import CompaniesGridView from '../view/companiesGridView';

class CompaniesController extends React.Component {
        constructor(props) {
                super();
                this.state    = {};
                this.fullList = [];
        }

        reloadCompaniesList() {
                axios({url: '/companies'}).then(result => {
                        console.log(result);
                        let data = result.companies;

                        let sorted = sortArrayWithKey(data, 'name');
                        console.log(sorted);
                        this.fullList = sorted.slice();
                        this.setState({
                                data: sorted
                        });
                });
        }

        searchCompany(query) {
                axios({url: `/companies/search?query=${query}`}).then(result => {
                        console.log(result);
                        let data = result.companies;

                        let sorted = sortArrayWithKey(data, 'name');
                        console.log(sorted);
                        this.setState({
                                data: sorted
                        });
                });
        }

        componentDidMount() {
                this.reloadCompaniesList();
        }



        getSearchBar() {
                const resetCompaniesList = () => {
                        this.setState({
                                data: this.fullList.slice()
                        });
                };
                const onQueryUpdate      = (val) => {
                        if (!val.length) {
                                return resetCompaniesList();
                        }
                        this.searchCompany(val);
                };
                return <div>
                        <div className="input-group" style={{margin: '2em', width: 'calc(100% - 4em)'}}>
                                <input type="text"
                                       className="form-control"
                                       onChange={(e) => debounce(onQueryUpdate(e.target.value, 500))}
                                       placeholder="Search "/>
                        </div>
                </div>;
        }

        getCompaniesListView() {
                const data = this.state.data;

                const onCardClick = (data) => {
                        this.props.history.push(`/company/${data.ticker}`);
                };

                return <div>
                        <CompaniesGridView data={data}
                                           onClick={onCardClick}/>
                </div>;
        }

        render() {
                return <div>
                        {this.getSearchBar()}
                        {this.getCompaniesListView()}
                </div>;
        }
}

export default CompaniesController;