import React, { Component } from 'react';

import Footer from './Footer.js'
import Header from './Header.js'
import Content from './Content.js'
import MiniFilter from './MiniFilter'
import InfoAlert from './InfoAlert'
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
			alert: {},
			alertOpen:false
        };
	}

	componentWillReceiveProps(nextProps) {
		
        if (nextProps.alert !== undefined && Object.keys(nextProps.alert).length > 0 && !Object.is(this.state.alert, nextProps.alert)) {

            this.setState({
				alert:nextProps.alert,
				alertOpen:true
            });
        }
    }
	
	closeAlert(){
		this.setState({
			alert: {},
			alertOpen:false
		})
	}

	render() {
        return (
			<>
				<section className="l-header position--fixed width--100 flex flex--column background-color--base-10">
					<div className="flex flex--column padding--m ">
						<Header mode={this.props.headerMode} history={this.props.history}/>
						{   
							this.props.isMiniFilter &&
							<MiniFilter history={this.props.history} />
						}
					</div>
					<InfoAlert type={this.state.alert.type} open={this.state.alertOpen} onClose={()=>this.closeAlert()} content={this.state.alert.content}/>
				</section>
				
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