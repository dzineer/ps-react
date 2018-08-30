import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components}) => {
    const navStyles = {
        width: '18rem',
        paddingTop: '25px'
    };

    return (
        <div className="col-md-3" style={navStyles}>
            <nav className="nav flex-column float-left">
                {
                    components.map( name => {
                        return (
                            <li key={name} className="nav-item">
                                <a href={`#${name}`} className="nav-link active">{name}</a>
                            </li>
                        )
                    })
                }
            </nav>
        </div>
    );
}

Navigation.protoType = {
    components: PropTypes.array.isRequired
};
export default Navigation;