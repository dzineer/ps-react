import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Page  extends Component {
    render() {
        return (
            <div className="container" >
                {this.props.children}
            </div>
        );
    }
}

Page.protoTypes = {
  page: PropTypes.object.isRequired
}


export default Page;