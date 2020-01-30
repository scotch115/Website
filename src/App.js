import React from 'react';

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
									<button className="button is-danger modal-button" data-target="modal-stack" aria-haspopup="true">
									<i className="fab fa-react" ></i>
									<span>Stack</span>
									</button>
								</span>
			            <span className="navbar-item">
			              <a className="button is-success" href="files/resume.pdf" download>
											<span className="icon">
												<i className="fa fa-file"></i>
											</span>
											<span>Resume</span>
			              </a>
			            </span>
									<span className="navbar-item">
										<a className="button is-link" href="https://www.linkedin.com/in/jordan-gamache-374417165">
											<span className="icon">
												<i className="fa fa-linkedin" ></i>
											</span>
											<span>LinkedIn</span>
										</a>
									</span>
			            <span className="navbar-item">
			              <a className="button is-black" href="https://github.com/scotch115">
			                <span className="icon">
			                  <i className="fa fa-github"></i>
			                </span>
											<span>GitHub</span>
			              </a>
			            </span>
			          </div>
			        </div>
			      </div>
			    </header>
			   </div>
				 <div className="modal" id="modal-stack">
				 	<div className="modal-background"></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">FERN Stack</p>
							<button className="delete" aria-label="close" data-target="modal-stack"></button>
						</header>
						<section className="modal-card-body">
							<p className="title">This website is built on the FERN stack.</p>
							<p> FERN is an acronym for a Full Stack (or all inclusive) method of web development. In particular, the FERN stack incorporates some of the most popular frameworks and tools to accompany traditional web development techniques. FERN uses Firebase, Express.js, React.js, and Node.js. These allow the site to be flexible, responsive, lightweight, and yet still powerful and precise. The FERN stack is my personal favorite and most comfortable method for building Web Apps like this one, however I have some familiarity with the MERN (MongoDB/Express/React/Node) stack as well.</p>
						</section>
					</div>
				 </div>
			   <div className="hero-body"  style={{backgroundColor: "white"}}>
			    <div className="container has-text-centered">
			      <h1 className="title">
			        <img src="images/JGlogo.png" alt="logo" width="170" height="190"/>
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
			        <p className="title">Hi there! <span role="img" aria-label="wave">👋🏻</span></p>
			        I'm Jordan Gamache, a freelance web developer with a passion for front end UI/UX and JavaScript frameworks.
							<figure className="image container is-256x256">
								<img src="images/profilepic.png" alt="profilePicture"/>
							</figure>
			        </article>
			        <article className="tile is-child box">
			          <p className="title">Languages I Speak</p>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          HTML, CSS, JavaScript, Swift, C, Java
			        </article>
			        <article className="tile is-child box">
			          <p className="title">Dev Tools</p>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          Atom, GitHub, Node, Express, Firebase, Travis, React, Working Copy (on iOS), Xcode, Bulma, Terminal
			        </article>
			        </div>
			        <div className="tile is-vertical is-parent">
			        <article className="tile is-child box">
			          <p className="title">Experience</p>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          Senior at University of Central Florida studying Interdisciplinary Studies in Computational Science and Commerce, with a Minor in National Intelligence and Security. I am beginning to work as a freelance web developer, looking to bring businesses a beautiful, clean website to reach more customers, and keep them. Check out my resumé or send me an email and let's talk!
			        </article>
			      </div>
			    </div>
				 </div>
				 <div style={{height: "20vh"}}></div>
				 <div className="section-body">
					 <form className="container box" action="https://usebasin.com/f/88688e738fdc" method="POST">
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
						        <input className="input" name="name" type="text" placeholder="Name"></input>
						        <span className="icon is-small is-left">
						          <i className="fa fa-user"></i>
						        </span>
						      </p>
						    </div>
						    <div className="field">
						      <p className="control is-expanded has-icons-left has-icons-right">
						        <input className="input is-success" type="email" name="email" placeholder="Email" ></input>
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
						  <div className="field-label is-normal">
						    <label className="label">Subject</label>
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <div className="control">
						        <input className="input " type="text" name="subject" placeholder="e.g. Website Redesign Request"></input>
						      </div>
						    </div>
						  </div>
						</div>

						<div className="field is-horizontal">
						  <div className="field-label is-normal">
						    <label className="label">Message</label>
						  </div>
						  <div className="field-body">
						    <div className="field">
						      <div className="control">
						        <textarea className="textarea" name="message" placeholder="Explain how we can help you"></textarea>
										<p className="help">
							        *This field is required
							      </p>
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
						        <button type="submit" className="button is-success">
						          Send message
						        </button>
						      </div>
						    </div>
						  </div>
						</div>
					 </form>
				</div>
				<div style={{height: "10vh"}}></div>
			   <footer className="hero-foot">
			    <div className="content has-text-centered">
			     Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)", margin: "0 3px", fontSize: "10px"}}></i> in Orlando
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
