import React, { Component } from 'react';

import Footer from './Footer.js'
import Header from './Header.js'
import Content from './Content.js'

class Layout extends Component {

	render() {
        return (
			<>
				<Header isMiniFilter = {this.props.isMiniFilter} mode={this.props.headerMode} history={this.props.history}/>
				
				<Content addClassName={`content-body ${this.props.isMiniFilter?"content-body--home":""}`} >
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