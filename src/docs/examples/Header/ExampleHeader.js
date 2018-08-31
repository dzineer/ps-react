import React from 'react';
import Header from "ps-react/Header";

/** Label with required First Name field */
export default function ExampleHeader() {

    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    return (
        <div style={css.for.container}>
            <Header title="This is a title" />
        </div>
    );
}