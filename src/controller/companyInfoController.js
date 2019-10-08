import React from 'react';
import axios from '../model/axios';


class CompanyInfoController extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        data: null,
                        loading: true,
                        nLoading: true,
                        news: [],
                        toggleLong: false
                };
        }

        getCompanyNewsData() {
                const companyId = this.props.match.params.id;
                axios({url: `/companies/${companyId}/news`}).then(result => {
                        console.log(result);
                        this.setState({
                                news: result.news.slice()
                        });
                }).finally(() => {
                        this.setState({
                                nLoading: false
                        });
                });
        }

        getCompanyDetails() {
                const companyId = this.props.match.params.id;
                axios({url: `/companies/${companyId}`}).then(result => {
                        console.log(result);
                        this.setState({
                                data: result
                        });
                }).finally(() => {
                        this.setState({
                                loading: false
                        });
                });
        }

        componentDidMount() {
                this.getCompanyDetails();
                this.getCompanyNewsData();
        }

        getNoDataBlock() {
                return <div>
                        Company with current Ticker not found
                </div>;
        }

        drawNewsBlock() {
                const loading = this.state.nLoading;
                if (loading) {
                        return <div>Loading...</div>;
                }
                const news = this.state.news;

                const onOpenNewsURL = (data) => {
                        window.location.href = data.url;
                };

                return <div className="comments-container">
                        <h2 className="panel-title">News</h2>
                        {
                                news.map((data, index) => {
                                        return <div className="panel">
                                                <div className="panel-body" onClick={() => onOpenNewsURL(data)}>
                                                        <h3 className="panel-title">{data.title}</h3>
                                                        <p>{data.summary}</p>
                                                        <p>Date: {new Date(data.publication_date).toLocaleString('en')}</p>
                                                </div>
                                        </div>;
                                })
                        }

                </div>;
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
                if (!data) {
                        return <div>
                                {this.getNoDataBlock()}
                        </div>;
                }
                return <div className="row">
                        <div className="col-md-8">
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
                        </div>
                        <div className="col-md-4">
                                {this.drawNewsBlock()}
                        </div>

                </div>;
        }
}

export default CompanyInfoController;