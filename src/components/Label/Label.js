import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
const Label = ({htmlFor, label, labelClassName, styles, children, required}) => {
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
        <label htmlFor={htmlFor} style={styles} className={labelClassName}>
            {children}
            {label} { required && <span style={css.for.required}> *</span> }
        </label>
    );
};

Label.protoTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Label Classname for CSS */
    className: PropTypes.string.isRequired,

    /** Styles for CSS */
    styles: PropTypes.string,

    /** Child elements */
    children: PropTypes.object,

    /** Display asterisk after label if true */
    required: PropTypes.bool
};

Label.defautTypes = {
    required: false
};

export default Label;