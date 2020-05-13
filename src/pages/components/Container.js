import React, { Component } from 'react';

class Container extends Component {
  render(){

        let className=`container shadow-neumorphic flex flex--column padding--l border-radius--s ${this.props.addClassName}`
        return(
            <div className={className}>
			    {
					this.props.children
				}
            </div>
        )
    }
}

export default Container;