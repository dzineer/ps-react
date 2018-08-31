import React from 'react';
import PropTypes from 'prop-types';

/** Allows you to fill selects as a component without state */
const SelectInput = (props) =>  {

    const css = {
        for: {
            select: {
              display: 'block',
              textAlign: 'center'
            },
            option: {

            }
        }
    };

    const {htmlId, name, defaultValue, data, onChange, size } = props;

    return (
        <select style={css.for.select} id={htmlId} name={name} size={size} onChange={onChange} defaultValue={defaultValue}>
            {
                data.map(option => {
                     return  <option key={option.key} value={option.value}>{option.key}</option>
                })
            }
        </select>
    );
};

SelectInput.protoTypes = {
    /** htmlId */
    htmlId: PropTypes.string.isRequired,

    /** name */
    name: PropTypes.string.isRequired,

    /** Default key to show */
    defaultValue: PropTypes.string,

    /** Options data */
    data: PropTypes.array.isRequired,

    /** Number of options to show at once */
    size: PropTypes.number,

    /** onChange handler */
    onChange: PropTypes.func.isRequired
};

SelectInput.defaultTypes = {
 size: 1
};

export default SelectInput;