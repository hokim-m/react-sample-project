import React from 'react';
import axios from '../model/axios';


class CompanyInfoController extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        data: null,
                        loading: true,
                        toggleLong: false
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

        companyDescription() {
                const data   = this.state.data;
                const isLong = this.state.toggleLong;

                const onClick = () => {
                        this.setState(prevState => {
                                return {
                                        toggleLong: !prevState.toggleLong
                                };
                        });
                };

                let key       = isLong ? 'long_description' : 'short_description';
                let btn_title = isLong ? 'Less' : 'Read More';

                return <p>Description: {data[key]} <a onClick={() => onClick()}>{btn_title}</a></p>;

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
                                        <p>Legal Name: {data.legal_name}</p>
                                        <p>CEO: {data.ceo}</p>
                                        <p>Entity Status: {data.entity_status}</p>
                                        <p>Sector: {data.sector}</p>
                                        <p>Cik: {data.cik}</p>
                                        <p>Ticker: {data.ticker}</p>
                                        {this.companyDescription()}
                                </div>
                        </div>

                </div>;
        }
}

export default CompanyInfoController;