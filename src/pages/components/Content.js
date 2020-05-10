import React, { Component } from 'react';

class Content extends Component {

    render() {
        return (
            <section className="l-content flex flex--column" >
                {
                    this.props.children
                }
            </section>
        )
    }
}

export default Content