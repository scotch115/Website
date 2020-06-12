import React, { Component } from 'react';
import missing from './page_not_found.png';

class fof extends Component {

render() {
	return(
		<div className="has-text-centered" style={{padding: "10px"}}>
			<div className="title has-text-centered" style={{position: "fixed", width: "100vw", top: "5%"}}>
				<h1>Page Not Found!</h1>
			</div>
			<div style={{position: "fixed", top: "12%", width: "98vw", fontSize: "calc(7px + 1vw)"}}>It looks like you may have ended up here on accident, and that's okay! <br />
				Stay as long as you'd like, and whenever you're ready, you can return to my website.
				<br /><br />
				<a href="/"><div className="button is-link" style={{width: "20vh"}}>Return</div></a>
			</div>

			<div style={{position: "static", width: "100vw", marginTop: "220px", justifyContent: "center"}}><img src={missing} alt="404 error" ></img></div>
		</div>
	);
}


}

export default fof;
