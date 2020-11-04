import React, { Component } from 'react';
import './App.css';

class Project extends Component {

	render() {
		return(
			<div id="project" style={{padding: "10px" }}>
			  <div style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
					<a href={this.props.link}><img src={this.props.img} alt="{{this.props.img}}"></img></a>
				</div>
				<p style={{color: "black", position: "relative", display: "flex", justifyItems: "center", alignItems: "center"}}>{this.props.title}</p>
			</div>
		);
	}

}

export default Project;
