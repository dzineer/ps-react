import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
    const { name, description, props, examples } = component;
    const css = {
        for: {
            container: {
                padding: '20px'
            }
        }
    }
    return (
        <div className="col-md-9 float-right" style={css.for.container}>

            <h2>{name}</h2>
            <p>{description}</p>

            <h3>Examples {examples.length > 1 && "s"}</h3>
            {
                examples.length > 0 ?
                    examples.map( example => {
                        return <Example key={example.code} example={example} componentName={name} />
                    }) : "No examples exists."
            }

            <h3>Props</h3>
            {
                props ?
                    <Props props={props} />
                    : "This component accepts no props."
            }
        </div>
    );
}

ComponentPage.protoTypes = {
    component: PropTypes.object.isRequired
}


export default ComponentPage;