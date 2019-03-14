import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onKeyPress, onChange, placeholder, name, value }) => (
    <td>
        <input
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            name={name}
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