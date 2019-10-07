import React from 'react';
import CompanyCardView from './companyCardView';
import {array_chunks} from '../model/helpers';

const CompaniesGridView = (props) => {
        let splitted = array_chunks(props.data, 5);

        return <div>
                {
                        splitted.map((array, i) => {
                                return <div className="row" key={`row${i}`}>
                                        {
                                                array.map((cp, index) => {
                                                        return <div key={index}
                                                                    onClick={() => props.onClick(cp)}
                                                                    className={`col-md-2 ${index === 0 && 'col-md-offset-1'}`}>
                                                                <CompanyCardView data={cp}/>
                                                        </div>;
                                                })
                                        }
                                </div>;
                        })

                }
        </div>;
};


CompaniesGridView.defaultProps = {
        data: [],
        onClick: function (c) {

        }
};

export default CompaniesGridView;