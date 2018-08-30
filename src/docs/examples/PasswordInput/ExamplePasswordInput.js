import React, { Component} from 'react';
import PasswordInput from "ps-react/PasswordInput";

/** PasswordInput example testing all features */
class ExamplePasswordInputAllFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.css = {
            for: {
                container: {
                    padding: '30px 0'
                }
            }
        };
    }

    getQuality() {
        const length = this.state.password.length;
        return length > 10 ? 100 : length * 10;
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    render() {
        const css = this.css;
        return (
            <div style={css.for.container}>
                <PasswordInput
                    htmlId="password-input-example-all-features"
                    name="password"
                    onChange={this.onPasswordChange}
                    value={this.state.password}
                    minLength={8}
                    placeholder="Enter password"
                    showVisibilityToggle
                    quality={this.getQuality()}
                    {...this.props}
                />
            </div>
        );
    }
}
export default ExamplePasswordInputAllFeatures;