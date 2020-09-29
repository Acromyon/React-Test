import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function CountClicker(props) {
    const [count, setCount] = useState(props.startValue);
    
    let increaseCount = () => {
        if (!props.hasOwnProperty('maxValue') || count < props.maxValue) {
            setCount(count + 1);
        }
    };
    
    let decreaseCount = () => {
        if (!props.hasOwnProperty('minValue') || count > props.minValue) {
            setCount(count - 1);
        }
    };
    
    return (
        <div className="count-clicker__widget card teal lighten-3">
            <p className="count-clicker__description">
                Available from {props.minValue ?? '-\u221E'} to {props.maxValue ?? '\u221E'}
            </p>
            <button
                className="btn-floating waves-effect waves-light teal"
                onClick={decreaseCount}>
                <i className="material-icons">remove</i>
            </button>
            <span className="count">
                {count}
            </span>
            <button
                className="btn-floating waves-effect waves-light teal"
                onClick={increaseCount}>
                <i className="material-icons">add</i>
            </button>
        </div>
    );
}

CountClicker.propTypes = {
    startValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
};

CountClicker.defaultProps  = {
    startValue: 0,
};