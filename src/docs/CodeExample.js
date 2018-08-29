import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

// This way is easy, bad add 170k gzipped to bundle since all languages are included
// import Highlight from 'react-highlight'
// Also checkout Prism
// http://bit.ly/react-prism

class CodeExample extends Component {
    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(this.element);
    }

    render() {
        return (
          <pre ref={ref => { this.element = ref }}>
              <code>
                  {this.props.children}
              </code>
          </pre>
        );
    }
}

CodeExample.propTypes = {
    children: PropTypes.string.isRequired
}

export default CodeExample;