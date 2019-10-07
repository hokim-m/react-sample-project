import React from 'react';
import axios from '../model/axios';


class CompanyInfoController extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        data: null,
                        loading: true
                };
        }

        componentDidMount() {
                const companyId = this.props.match.params.id;
                axios({url: `/companies/${companyId}`}).then(result => {
                        console.log(result);
                        this.setState({
                                data: result,
                                loading: false
                        });
                });
        }

        render() {
                const {data, loading} = this.state;
                if (loading) {
                        return <div></div>;
                }
                return <div>

                        <div className="panel">
                                <div className="panel-body">
                                        <h3 className="panel-title">{data.name}</h3>
                                        <p>Cik: {data.cik}</p>
                                        <p>Ticker: {data.ticker}</p>
                                </div>
                        </div>

                </div>;
        }
}

export default CompanyInfoController;