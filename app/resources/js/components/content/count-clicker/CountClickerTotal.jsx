import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

export default function CountClickerTotal(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className={`${style.widgetTotal} card teal lighten-3`}>
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