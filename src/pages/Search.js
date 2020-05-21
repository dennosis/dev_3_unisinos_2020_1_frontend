import React, { Component } from 'react';

import Layout from './components/Layout';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Img from './components/Img';

class Search extends Component {
    render(){
		return(
			<Layout>
				<Title text="Search"/>

			</Layout>
		)
  	}
}

export default Search;