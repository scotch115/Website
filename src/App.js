import React from 'react';
import './App.css';



class App extends React.Component {
	render(){
		return (
	    <div className="App">
				<section className="hero is-large">
			  <div className="hero-head">
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

			   <div className="hero-body" sytle="background-color: white;">
			    <div className="container has-text-centered">
			      <h1 className="title">
			        <img src="images/JGlogo.jpeg" alt="logo" width="170" height="190"/>
			      </h1>
			      <p className="subtitle">
			        <strong> Jordan Gamache </strong>
			      </p>
			    </div>
			   </div>
			    <div className="tile is-ancestor">
			      <div className="tile is-vertical is-parent">
			        <article className="tile is-child box">
			        <p className="title">Hi <span role="img" aria-label="wave">👋🏻</span></p>
			        I'm Jordan Gamache, a freelance web developer with a passion for front end UI/UX and JavaScript frameworks.
			         <div className="has-text-centered" style={{padding: "10px"}}>
			         </div>
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
			   <div style={{height: "30vh"}}></div>
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
