import React, { Component } from 'react';

class Title extends Component {
  render() {

        const Tag = this.props.tag || "h1"
        let className=""

        switch (Tag) {
            case 'h2':
                className="font-size--3xl font--medium padding--m color--base-40"
                break;
            
            case 'h3':
                className="font-size--xl font--medium padding--m color--base-40"
                break;
            
            default:
                
                className="font-size--5xl font--medium padding--l color--base-30"
                break;
        }

        return (
            <Tag className={className}>
                {this.props.text}
            </Tag>
        );
    }
}

export default Title