import React from 'react';
import axios from '../model/axios';
import {sortArrayWithKey} from '../model/helpers';
import CompaniesGridView from '../view/companiesGridView';

class CompaniesController extends React.Component {
        constructor(props) {
                super();
                this.state = {};
        }

        componentDidMount() {
                axios({url: '/companies'}).then(result => {
                        console.log(result);
                        let data = result.companies;

                        let sorted = sortArrayWithKey(data, 'name');
                        console.log(sorted);
                        this.setState({
                                data: sorted
                        });
                });
        }

        getSearchBar() {
                return <div></div>;
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