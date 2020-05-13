import React, { Component } from 'react';
import Content from './Content.js'

class Header extends Component {
  render() {
        return (
            <header className="l-header position--fixed width--100 background-color--base-10">

                <Content>header</Content>

            </header>
        );
    }
}

export default Header