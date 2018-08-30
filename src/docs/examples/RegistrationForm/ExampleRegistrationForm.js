import React, { Component} from 'react';
import RegistrationForm from "ps-react/RegistrationForm";

/** RegistrationFormExample example testing all features */
class RegistrationFormExample extends Component {
    constructor(props) {
        super(props);

        this.css = {
            for: {
                container: {
                    padding: '30px 0'
                }
            }
        };
    }

    onSubmit = event => {
        // alert(event);
        event.preventDefault();
        console.log('Submitted');
        return false;
    };

    render() {
        return (
            <div style={this.css.for.container}>
                <RegistrationForm
                    confirmationMessage="Thank you for registering with us."
                    onSubmit={this.onSubmit}
                    minPasswordLength={8}
                />
            </div>

        );
    }
}
export default RegistrationFormExample;