import React from 'react';
import './App.css';
import Project from './Project';
import sb from './simply-sc.png';
import tg from './tg.png';
import sc from './snowcap.png';
import tn from './treknoise.png';
import show from './showcase-sc.png';
import wireframe from './wireframe.png';
import webApp from './web_app.png';
import developer from './developer.png';
import hello from './hello.png';
import munchShow from './munch.png';
import rocket from './rocket_project.png';
import flightCPU from './flightComputer.PNG';
import projectBuild from './build.png';
import AddToHomescreen from 'react-add-to-homescreen';

class App extends React.Component {

	componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

	render(){
		return (
	    <div className="App" style={{backgroundColor: "rgb(241, 241, 241)"}}>
				<section className="hero is-large">
			  <div className="hero-head"  style={{backgroundColor: "white"}}>
			  <header className="navbar" style={{height: "20px", position: "fixed", right: "10px", marginTop: "20px"}}>
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
									<span className="icon">
										<i className="fab fa-react" ></i>
										</span>
										<span >Stack</span>
									</button>
								</span>
			            <span className="navbar-item">
			              <a className="button is-success" href="files/JordanGamacheResume.pdf" download>
											<span className="icon">
												<i className="fa fa-file"></i>
											</span>
											<span>Resume</span>
			              </a>
			            </span>
									<span className="navbar-item">
										<a className="button is-link" href="https://www.linkedin.com/in/jordan-gamache-374417165">
											<span className="icon">
												<i className="fab fa-linkedin" ></i>
											</span>
											<span>LinkedIn</span>
										</a>
									</span>
			            <span className="navbar-item">
			              <a className="button is-black" href="https://github.com/scotch115">
			                <span className="icon">
			                  <i className="fab fa-github"></i>
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
			   <header id="header" style={{backgroundColor: "white", height: "500px"}}>
			    <div className="container has-text-centered">
					<div id="spacer"> </div>
			      <div className="title">
			        <img className="JGlogo" id="logo" src="images/JGlogo.png" alt="logo" width="170" height="190"/>
			      </div>
			      <p className="subtitle" id="subtitle">
			        <strong> Jordan Gamache </strong>
			      </p>
			    </div>
			   </header>
				 <div style={{height: "10vh"}}></div>
				 <div className="container">
			    <div className="tile is-ancestor">
			      <div className="tile is-vertical is-6 is-parent">
			        <article className="tile is-child box" id="card1">
			        <p className="title">Hi there! <span role="img" aria-label="wave">👋🏻</span></p>
							<img src={hello} alt="hello" style={{position: "relative", float: "right", top: "0", height: "40vmin"}}></img>
							<p>
			        	I'm Jordan Gamache, a software developer with a passion for front end UI/UX, JavaScript frameworks like React and Angular, and mobile applications (for iOS AND Android!).
							</p>
							</article>
			        <article className="tile is-child box" id="card2">
			          <p className="title">Experience</p>
								<img src={wireframe} alt="wireframe" style={{position: "relative", float: "right", top: "0", height: "40vmin"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          I am a graduate from the University of Central Florida where I studied Interdisciplinary Studies in Computational Science and Commerce, and Minored in National Intelligence and Security. I have some experience working as a freelance web developer, and am looking to bring businesses beautiful, clean websites or apps to reach more customers, and keep them. Check out my resumé or send me an email and let's talk!
			        </article>
							</div>
							<div className="tile is-6 is-vertical is-parent">
			        <article className="tile is-child box" id="card3">
			          <p className="title">Languages</p>
								<img src={webApp} alt="webApp" style={{position: "relative", top: "0", height: "40vmin", float: "right"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          HTML, CSS, JavaScript, Swift, C, Java, Dart
			        </article>
			        <article className="tile is-child box" id="card4">
			          <p className="title">Development Tools</p>
								<img src={developer} alt="developer" style={{position: "relative", top: "0", height: "40vmin", float: "right	"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          Atom, GitHub, NodeJS, ExpressJS, Firebase, Flutter, Visual Studio Code, Travis, ReactJS, EmberJS, Working Copy (on iOS), Xcode, Bulma, Terminal, Arduino (C++)
			        </article>
		        	</div>
						</div>
						<div style={{padding: "40px"}}></div>
						<div className="tile is-child">
							<article className="tile is-child container box" id="card">
							<p className="title">Projects</p>
								<div className="columns is-multiline">
								<img src={projectBuild} style={{height: "120px"}} alt="Factory"></img>
								<div className="column"><Project title="Snowcap Coffee" link="https://snowcap-coffee.web.app" img={sc}/></div>
									<div className="column"><Project title="Simply Boba" link="https://simply-boba.web.app" img={sb} /></div>
									<div className="column"><Project title="Trek Noise" link="https://trek-noise.web.app" img={tn}/></div>
									<div className="column"><Project title="Daily - To-Do App" link="https://showcase-daily.web.app" img={show}/></div>
									<div className="column"><Project title="Munch - Restaurant App" link="https://munchshowcase.web.app" img={munchShow}/></div>
									<div className="column"><Project title="Tom Gamache Books" link="https://tomgamachebooks.web.app" img={tg}/></div>
								</div>
							</article>
						</div>
						<div style={{padding: "5vh"}}></div>
				 </div>
				 <div className="tile is-child">
					 <div className="container box">
					 <p className="title">Hobby Projects</p>
						 <div className="columns">
						 <img src={rocket} style={{height: "200px"}} alt="Rocket"></img>
						 <div className="column is-8" ><Project title="Arduino Flight Computer" link="https://github.com/scotch115/Arduino-Telemetry.git" img={flightCPU} /></div>
						 </div>
					 </div>
					 <div style={{padding: "2vh"}}></div>
				 </div>
				 <div className="section-body">
					 <form className="container box" action="https://usebasin.com/f/88688e738fdc" method="POST">
					 	<div className="title">
					 		Want to work together?
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
						        <input className="input is-link" type="email" name="email" placeholder="Email" ></input>
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
						        <button type="submit" className="button is-link">
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
			     Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i> in Orlando
			    <div className=" content has-text-centered">
			      <a href="https://bulma.io">
			      <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
			      </a>
			    </div>
					</div>
			   </footer>
			  </section>
			  <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
			</div>
	  );
	}

}

export default App;
