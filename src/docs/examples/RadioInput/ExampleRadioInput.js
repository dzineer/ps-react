import React from 'react';
import RadioInput from "ps-react/RadioInput";

/** Label with required First Name field */
export default function ExampleRadioInput() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    return (
        <div style={css.for.container}>
            <RadioInput
                htmlId="test"
                name="test"
                className="radio"
                value="1"
            />
        </div>
    );
}