import React from 'react';

const CompanyCardView = (props) => {
        let {data} = props;

        return <div>
                <h3>{data.name}</h3>
                <p>LEI: {data.lei}</p>
                <p>Ticker: {data.ticker}</p>
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