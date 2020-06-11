import React, { Component } from 'react';
import './App.css';

class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id="project" style={{padding: "10px"}}>
			  <div style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
					<a href={this.props.link} style={{opacity: 0.5}}><img src={this.props.img}></img></a>
				</div>
				<p style={{color: "black", position: "relative", display: "flex", justifyItems: "center", alignItems: "center"}}>{this.props.title}</p>
			</div>
		);
	}

}

export default Project;
