import React from 'react';
import PropTypes from 'prop-types';

export default function CountClickerTotal(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="count-clicker__widget-total card teal lighten-3">
                    <h6>
                        Total count is {props.totalCount}
                    </h6>
                    <h5>
                        ${props.totalPrice}
                    </h5>
                </div>
            </div>
        </div>
    );
}

CountClickerTotal.propTypes = {
    totalCount: PropTypes.number,
    totalPrice: PropTypes.number,
};