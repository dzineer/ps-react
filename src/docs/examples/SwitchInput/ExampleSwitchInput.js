import React from 'react';
import SwitchInput from "ps-react/SwitchInput";

/** Label with required First Name field */
export default function ExampleSwitchInput() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    return (
        <div style={css.for.container}>
            <SwitchInput
                radioName="gender"

                firstHtmlId="sex-male"
                firstLabel="Male"
                firstRadioClassName="switch-input"
                firstLabelClassName="switch-label form-control switch-right"
                firstValue="M"

                secondHtmlId="sex-female"
                secondLabel="Female"
                secondRadioClassName="switch-input"
                secondLabelClassName="switch-label form-control switch-left"
                secondValue="F"

                onChange={() => {}}

                defaultSwitch="first"
            />
        </div>
    );
}