import React from 'react';
import RadioLabelInput from "ps-react/RadioLabelInput";

/** Label with required First Name field */
export default function ExampleRadioLabelInput() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    return (
        <div style={css.for.container}>
            <RadioLabelInput
                htmlId="test"
                name="test"
                label="Test"
                containerClassName="radio"
                radioInside="true"
                value="1"
                required
            />
        </div>
    );
}