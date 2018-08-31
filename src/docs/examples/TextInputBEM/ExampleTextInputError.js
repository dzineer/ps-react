import React from 'react';
import TextInputErrorPostCSS from "ps-react/TextInputPostCSS";

/** Optional TextBox */
export default function ExampleTextInputErrorPostCSS() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    }
    return (
        <div style={css.for.container}>
            <TextInputErrorPostCSS
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