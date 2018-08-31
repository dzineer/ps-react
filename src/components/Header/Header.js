import React from 'react';
import PropTypes from 'prop-types';

/** Header */
const Header = ({title, ...props}) => {

    const css = {
        for: {
            header: {
              display: 'block',
              textAlign: 'center'
            }
        }
    };

    return (
        <h1 style={css.for.header}>{title}</h1>
    );
};

Header.protoTypes = {
    /** Header text */
    title: PropTypes.string.isRequired
};

export default Header;