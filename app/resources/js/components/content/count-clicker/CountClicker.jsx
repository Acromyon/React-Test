import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

export default function CountClicker(props) {
    let increaseCount = () => {
        if (!props.hasOwnProperty('maxCount') || props.currentCount < props.maxCount) {
            props.changeCount(props.currentCount + 1);
        }
    };
    
    let decreaseCount = () => {
        if (!props.hasOwnProperty('minCount') || props.currentCount > props.minCount) {
            props.changeCount(props.currentCount - 1);
        }
    };
    
    return (
        <div className={`${style.widget} card teal lighten-3`}>
            <h5>
                {props.name} <span className={style.price}> - (${props.price})</span>
            </h5>
            <p className={style.description}>
                Available {props.maxCount ?? '\u221E'} units
            </p>
            
            <div className={style.controls}>
                <button
                    className="btn-floating waves-effect waves-light teal"
                    onClick={decreaseCount}>
                    <i className="material-icons">remove</i>
                </button>
                <span className={style.count}>
                    {props.currentCount}
                </span>
                <button
                    className="btn-floating waves-effect waves-light teal"
                    onClick={increaseCount}>
                    <i className="material-icons">add</i>
                </button>
            </div>
            
            <h6 className={style.sumPrice}>
                ${props.currentCount * props.price}
            </h6>
        </div>
    );
}

CountClicker.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    currentCount: PropTypes.number,
    minCount: PropTypes.number,
    maxCount: PropTypes.number,
};

CountClicker.defaultProps  = {
    currentCount: 1,
    minCount: 1,
};