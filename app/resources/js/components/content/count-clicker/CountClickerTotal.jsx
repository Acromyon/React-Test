import React from 'react';
import PropTypes from 'prop-types';

export default function CountClickerTotal(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="count-clicker__widget-total card teal lighten-3">
                    <h6>
                        Total count is {props.total.count}
                    </h6>
                    <h5>
                        ${props.total.price}
                    </h5>
                </div>
            </div>
        </div>
    );
}

CountClickerTotal.propTypes = {
    total: PropTypes.object,
};