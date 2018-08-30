import React from 'react';
import EyeIcon from "ps-react/EyeIcon";

/** Example EyeIcon with optional width */
export default function ExampleEyeIcon() {
    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    return (
        <div style={css.for.container}>
            <EyeIcon width={30} />
        </div>
    );
}