import React from 'react';
import SelectInput from "ps-react/SelectInput";

/** Label with required First Name field */
export default function ExampleHeader() {

    const css = {
        for: {
            container: {
                padding: '30px 0'
            }
        }
    };

    const getData = () => {
      return [
          { key: "First", value: "1" },
          { key: "Second", value: "2" },
          { key: "Third", value: "3" },
      ]
    };

    return (
        <div style={css.for.container}>
            <SelectInput
                htmlId="test"
                name="test"
                defaultValue={1}
                data={getData()}
                onChange={() => {}}
            />
        </div>
    );
}