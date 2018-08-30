import React from 'react';
import Label from "ps-react/Label";

/** Label with required First Name field */
export default function ExampleLabel() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    }
    return (
        <div style={css.for.container}>
            <Label label="First Name" required={true} htmlFor="first_name" />
        </div>
    );
}