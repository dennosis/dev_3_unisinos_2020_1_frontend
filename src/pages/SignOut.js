import React, { Component } from 'react';
import {deleteToken, deleteUser } from '../persist'

class MenuUser extends Component {

    componentWillMount() {
        deleteUser()
        deleteToken()
        this.props.history.push("/");
    }

    render() {
        return (
            <section>
            </section>
        );
    }
}

export default MenuUser