import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onKeyPress, onChange, value }) => (
    <td>
        <input
            placeholder='search name'
            onChange={onChange}
            onKeyPress={onKeyPress}
            name='name'
            value={value}
        />
    </td>
);

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string
};

Input.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
    name: ''
};

export default Input;