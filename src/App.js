import React from 'react';
import './App.css';



class App extends React.Component {
	render(){
		return (
	    <div className="App" style={{backgroundColor: "rgb(241, 241, 241)"}}>
				<section className="hero is-large">
			  <div className="hero-head"  style={{backgroundColor: "white"}}>
			  <header className="navbar">
			      <div className="container">
			        <div className="navbar-brand">
			          <div role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" is-active="false">
			            <span aria-hidden="true"></span>
			            <span aria-hidden="true"></span>
			            <span aria-hidden="true"></span>
			          </div>
			        </div>
			        <div id="navMenu" className="navbar-menu">
			          <div className="navbar-end">
			            <span className="navbar-item">
			              <a className="button is-link is-inverted" href="files/resume.pdf" download style={{color: "black"}}>
			                <span className="icon">
			                  <i className="fa fa-file" style={{padding: "10px", width: "50px", textAlign: "center", textDecoration: "none", border: "2px solid black", borderRadius: "50%"}}></i>
			                </span>
			              </a>
			            </span>
			            <span className="navbar-item">
			              <a className="button is-link is-inverted" href="https://www.linkedin.com/in/jordan-gamache-374417165" style={{color: "black"}}>
			                <span className="icon">
			                  <i className="fa fa-linkedin" style={{padding: "10px", width: "50px", textAlign: "center", textDecoration: "none", border: "2px solid black", borderRadius: "50%"}}></i>
			                </span>
			              </a>
			            </span>
			            <span className="navbar-item">
			              <a className="button is-link is-inverted" href="mailto:jordangamache115@gmail.com" style={{color: "black"}}>
			                <span className="icon">
			                  <i className="fa fa-send" style={{padding: "10px", width: "50px", textAlign: "center", textDecoration: "none", border: "2px solid black", borderRadius: "50%"}}></i>
			                </span>
			              </a>
			            </span>
			            <span className="navbar-item">
			              <a className="button is-link is-inverted" href="https://github.com/scotch115" style={{color: "black"}}>
			                <span className="icon">
			                  <i className="fa fa-github" style={{padding: "10px", width: "50px", textAlign: "center", textDecoration: "none", border: "2px solid black", borderRadius: "50%"}}></i>
			                </span>
			              </a>
			            </span>
			          </div>
			        </div>
			      </div>
			    </header>
			   </div>

			   <div className="hero-body"  style={{backgroundColor: "white"}}>
			    <div className="container has-text-centered">
			      <h1 className="title">
			        <img src="images/JGlogo.jpeg" alt="logo" width="170" height="190"/>
			      </h1>
			      <p className="subtitle">
			        <strong> Jordan Gamache </strong>
			      </p>
			    </div>
			   </div>
				 <div style={{height: "10vh"}}></div>
				 <div className="container">
			    <div className="tile is-ancestor">
			      <div className="tile is-vertical is-parent">
			        <article className="tile is-child box">
			        <p className="title">Hi <span role="img" aria-label="wave">👋🏻</span></p>
			        I'm Jordan Gamache, a freelance web developer with a passion for front end UI/UX and JavaScript frameworks.
							<div className="has-text-centered" style={{padding: "10px"}}></div>
							<img src="images/contact.jpeg" alt="profilePicture" style={{width: "350px"}}/>
			        </article>
			        <article className="tile is-child box">
			          <p className="title">Languages I Speak</p>
			          HTML, CSS, JavaScript, Swift, C, Java,
			        </article>
			        <article className="tile is-child box">
			          <p className="title">Dev Tools</p>
			          Atom, GitHub, Node, Express, Firebase, Travis, React, Working Copy (on iOS), Xcode, Bulma, Terminal
			        </article>
			        </div>
			        <div className="tile is-vertical is-parent">
			        <article className="tile is-child box">
			          <p className="title">Experience</p>
			          Senior at University of Central Florida studying Interdisciplinary Studies in Computational Science and Commerce, with a Minor in National Intelligence and Security. I am beginning to work as a freelance web developer, looking to bring businesses a beautiful, clean website to reach more customers, and keep them. Check out my resumé or send me an email and let's talk!
			        </article>
			      </div>
			    </div>
				 </div>
				 <div style={{height: "20vh"}}></div>
				 <div className="section-body">
					 <div className="container box">
					 	<div className="title">
					 		Let's work together!
					 	</div>
						  <div className="field is-horizontal">
						  <div className="field-label is-normal">
						    <label className="label">From</label>
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <p className="control is-expanded has-icons-left">
						        <input className="input" type="text" placeholder="Name"></input>
						        <span className="icon is-small is-left">
						          <i className="fa fa-user"></i>
						        </span>
						      </p>
						    </div>
						    <div className="field">
						      <p className="control is-expanded has-icons-left has-icons-right">
						        <input className="input is-success" type="email" placeholder="Email"></input>
						        <span className="icon is-small is-left">
						          <i className="fa fa-envelope"></i>
						        </span>
						        <span className="icon is-small is-right">
						          <i className="fa fa-check"></i>
						        </span>
						      </p>
						    </div>
						  </div>
						</div>

						<div className="field is-horizontal">
						  <div className="field-label"></div>
						  <div className="field-body">
						    <div className="field is-expanded">
						      <div className="field has-addons">
						        <p className="control">
						          <div className="button is-static">
						            +1
						          </div>
						        </p>
						        <p className="control is-expanded">
						          <input className="input" type="tel" placeholder="Your phone number"></input>
						        </p>
						      </div>
						      <p className="help">Do not enter the country code</p>
						    </div>
						  </div>
						</div>

						<div className="field is-horizontal">
						  <div className="field-label is-normal">
						    <label className="label">Subject</label>
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <div className="control">
						        <input className="input " type="text" placeholder="e.g. Partnership opportunity"></input>
						      </div>
						      <p className="help">
						        *This field is required
						      </p>
						    </div>
						  </div>
						</div>

						<div className="field is-horizontal">
						  <div className="field-label is-normal">
						    <label className="label">Question</label>
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <div className="control">
						        <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
						      </div>
						    </div>
						  </div>
						</div>

						<div className="field is-horizontal">
						  <div className="field-label">
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <div className="control">
						        <button className="button is-success">
						          Send message
						        </button>
						      </div>
						    </div>
						  </div>
						</div>
					 </div>
				</div>
				<div style={{height: "10vh"}}></div>
			   <footer className="hero-foot">
			    <div className="content has-text-centered">
			     Made with <i className="fa fa-heart" style={{color: "#E90606", margin: "0 3px", fontSize: "10px"}}></i> in Orlando
			    <div className=" content has-text-centered">
			      <a href="https://bulma.io">
			      <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
			      </a>
			    </div>
					</div>
			   </footer>
			  </section>
			</div>
	  );
	}
}



export default App;
