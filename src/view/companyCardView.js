import React from 'react';

const CompanyCardView = (props) => {
        let {data} = props;

        return <div className="panel">
                <div className="panel-body">
                        <h3 className="panel-title">{data.name}</h3>
                        <p>Cik: {data.cik}</p>
                        <p>Ticker: {data.ticker}</p>
                </div>
        </div>;
};


CompanyCardView.defaultProps = {
        data: {
                cik: '',
                id: '',
                lei: '',
                name: '',
                ticker: ''
        }
};

export default CompanyCardView;