import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
const Label = ({htmlFor, label, required}) => {
    const css = {
        for: {
            label: {
              display: 'block'
            },
            required: {
                color: 'red'
            }
        }

    };

    return (
        <label htmlFor={htmlFor} style={css.for.label}>
            {label} { required && <span style={css.for.required}> *</span> }
        </label>
    );
};

Label.protoTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool
};


export default Label;