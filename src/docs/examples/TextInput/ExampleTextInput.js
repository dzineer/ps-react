import React from 'react';
import TextInput from "ps-react/TextInput";

/** Optional TextBox */
export default function ExampleTextInput() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    }
    return (
        <div style={css.for.container}>
            <TextInput
                htmlId="example-text-input"
                type="text"
                label="First Name"
                name="first_name"
                onChange={event => console.log("changed")}
            />
        </div>
    );
}