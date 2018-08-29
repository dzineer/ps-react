import React from 'react';
import PropTypes from 'prop-types';

function HelloWord2({message}) {
    return (
        <h1>Hello {message}</h1>
    );
}

HelloWord2.propTypes = {
    /**
     * Message to display  */
    message: PropTypes.string
};

HelloWord2.defaultProps = {
    message: 'World'
};

export default HelloWord2;