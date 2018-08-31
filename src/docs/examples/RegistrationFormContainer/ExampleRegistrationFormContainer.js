import React, { Component} from 'react';
import RegistrationFormContainer from "ps-react/RegistrationFormContainer";

/** ExampleRegistrationFormContainer example testing all features */
class ExampleRegistrationFormContainer extends Component {
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

    onSubmit = (user) => {
        console.log(user);
    };

    render() {
        return (
            <div style={this.css.for.container}>
                <RegistrationFormContainer
                    confirmationMessage="Thank you for registering with us."
                    onSubmit={this.onSubmit}
                    minPasswordLength={8}
                />
            </div>

        );
    }
}
export default ExampleRegistrationFormContainer;