import React, { Component } from 'react';
import Content from './Content.js'

class Footer extends Component {
    render() {
        return (
            <footer className="l-footer margin-top--auto border-top--2 border-color--base-20" >
                <Content>footer</Content>
            </footer>
        );
    }
}

export default Footer