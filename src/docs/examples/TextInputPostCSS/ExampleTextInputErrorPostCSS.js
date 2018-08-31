import React from 'react';
import TextInputPostCSS from "ps-react/TextInputPostCSS";

/** Optional TextBox */
export default function ExampleTextInputError() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    }
    return (
        <div style={css.for.container}>
            <TextInputPostCSS
                htmlId="example-text-input"
                type="text"
                label="First Name"
                name="first_name"
                onChange={event => console.log("changed")}
                required
                error="First name is required"
            />
        </div>
    );
}