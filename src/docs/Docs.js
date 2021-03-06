import React, { Component } from 'react'
import Navigation from './Navigation'
import Page from './Page';
import ComponentPage from './ComponentPage'
import componentData from '../config/componentData';

class Docs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        })
    }

    render() {
        const {route} = this.state;
        const component = route ? componentData.filter( component => {
            return component.name === route;
        })[0] :
            componentData[0];
        return (
            <Page>
                <div className="row">
                    <Navigation components={componentData.map(component => component.name)} />
                    <ComponentPage component={component} />
                </div>
            </Page>
        );
    }
}

export default Docs;