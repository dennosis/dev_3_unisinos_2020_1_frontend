import React, { Component } from 'react';

import Footer from './Footer.js'
import Header from './Header.js'
import Content from './Content.js'

class Layout extends Component {

	render() {
        return (
			<>
				<Header/>
				
				
				<Content>
					{
						this.props.children
					}
				</Content>

				<Footer/>
			</>
        )
    }
}

export default Layout;