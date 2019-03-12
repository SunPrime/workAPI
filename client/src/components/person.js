import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ id, name, email, funds, city, phone, onClick }) => (
    <tr onClick={onClick}>
       <td>{id}</td>
       <td>{name}</td>
       <td>{email}</td>
       <td>{city}</td>
       <td>{phone}</td>
       <td>{funds}</td>
    </tr>
);

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    funds: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
};

Person.defaultProps = {
    name: '',
    email: '',
    funds: '',
    city: '',
    phone: ''
};

export default Person;