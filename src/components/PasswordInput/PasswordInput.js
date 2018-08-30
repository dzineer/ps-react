import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

/** Password input with integrated label, quality tips, and show password toggle  */
class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        };

        this.css = {
            for: {
                container: {
                    marginBottom: '16px'
                },
                input: {
                    border: 'solid 1px red'
                },
                error: {
                    color: 'red'
                }
            }
        };
    }
    /** this a class property that is not part of the official JS spec yet. But Babel will transpile it. */
    toggleShowPassword = event => {
        this.setState( prevState => {
            return { showPassword: !prevState.showPassword };
        });
        if (event) event.preventDefault();
    };

    render() {

        const {htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
        const { showPassword } = this.state;

        return (
            <div style={this.css.for.container}>
                <TextInput
                    htmlId={htmlId}
                    label={label}
                    placeholder={placeholder}
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    maxLength={maxLength}
                    error={error}
                    required="true"
                    onChange={onChange}
                    {...props}>
                {
                    showVisibilityToggle &&
                    <a href=""
                    onClick={this.toggleShowPassword}
                    style={{marginLeft: 5}}>
                    <EyeIcon />
                    </a>
                }
                {
                    value.length > 0 && quality && <ProgressBar percent={quality} width={130} />
                }
                </TextInput>
            </div>
        );
    }
}

PasswordInput.protoTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing.  */
    htmlId: PropTypes.string.isRequired,
    /** Input name. Recommend setting this to match object's property so a single change handler can */
    name: PropTypes.string.isRequired,

    /** Input label  */
    label: PropTypes.string.isRequired,

    /** Input type  */
    type: PropTypes.string.isRequired,

    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,

    /** Placeholder to display when empty */
    placeholder: PropTypes.string,

    /** Maximum size of password field */
    maxLength: PropTypes.number,

    /** show visibility */
    showVisibilityToggle: PropTypes.bool,

    /** Quality  */
    quality: PropTypes.number,

    /** Value  */
    value: PropTypes.any,

    /** String to display when error occurs.  */
    error: PropTypes.string,
};

PasswordInput.defaultProps = {
    maxLength: 30,
    showVisibilityToggle: false,
    label: "Password"
};

export default PasswordInput;