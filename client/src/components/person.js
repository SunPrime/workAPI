import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ id, name, email, funds, city, phone, onClick }) => (
    <tr onClick={onClick}>
       <td className='id'>{id}</td>
       <td className='name'>{name}</td>
       <td className='email'>{email}</td>
       <td className='city'>{city}</td>
       <td className='phone'>{phone}</td>
       <td className='funds'>{funds}</td>
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