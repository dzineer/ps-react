import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
    console.log(props);
    return (
        <table className="props table table-striped table-bordered">
            <thead className="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Required</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(props).map(key => {
                    return <tr key={key}>
                        <td>{key}</td>
                        <td>{props[key].description}</td>
                            {
                                typeof props[key].type !== 'undefined' ?
                                    <td>{props[key].type.name}</td>
                                    :
                                   <td>No Type Shown</td>
                            }
                        <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
                        <td>{props[key].required ? 'X' : ''}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
}

Props.protoTypes = {
    props: PropTypes.object.isRequired
}

export default Props;