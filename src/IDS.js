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

class IDS extends React.Component {

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
							<img src={hello} alt="hello" style={{position: "relative", float: "right", top: "0", height: "45vmin"}}></img>
							<p>
                                I'm Jordan Gamache, a freelance web developer with a passion for front end UI/UX and JavaScript frameworks. I desire to learn as much as I can, and always keep an open mind and perspective. As a software developer, it is my goal in life to help dreamers become doers, and to expand the potential of small businesses in today’s ever-changing technological world. It’s important to listen and improve, to never stop, never quit, and speak clearly for what you believe in; it’s important to help others, selflessly.
                                <br /> <br />
                                I strive to help contribute and collaborate more frequently with open source projects, to help expand the reach and potential of software developed by people, just like me. I have built many websites and mobile applications, and have competed in many software competitions known as Hack-A-Thons, and have had a taste of many different software languages and technologies in the last 4 years, yet I still desire to learn more, and to excel. It is important for me to be an expert in the field, so that I can be a viable resource to those who have questions, because at the root of it all, I believe in helping others.
                                <br /> <br />
                                Many feel overwhelmed or scared of learning something new, especially when they don’t fully understand how what they are learning works. Others pretend to know more than they do to never appear uneducated about a certain subject. Neither is inherently good nor bad, but those who seek to understand tend to feel neither of these ways. I find that taking the optimistic-competitive approach helps me feel motivated to perform research and analysis of things I do not understand, to take on the challenge, and climb. I want to not only become an expert in my field of study, but also to understand more about the inner-workings of my hobbies. To give things I find fun the chance to be center stage, even if it remains a hobby afterwards, brings me great joy, and fuels my fire for learning. 
                                <br /> <br />
                                Going forward, I will continue to rise to the challenges ahead, to learn everything I can from everyone I meet and from every experience I have, and to use what I learn to continue my work as a software developer and help people exceed their own expectations. Using the skills I have learned, and ones I desire to learn, I can help better and advance society both directly and indirectly, through helping small businesses develop an online presence and by contributing to open source software projects, respectively. It is my responsibility to take criticism and learn from it, to use my heart and my head, rather than only one at a time.   
							</p>
							</article>
			        <article className="tile is-child box" id="card2">
			          <p className="title">Learning</p>
								<img src={wireframe} alt="wireframe" style={{position: "relative", float: "right", top: "0", height: "40vmin"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          I am a Senior at the University of Central Florida studying Interdisciplinary Studies in Computational Science and Commerce, with a Minor in National Intelligence and Security. I am beginning to work as a freelance web developer, looking to bring businesses a beautiful, clean website to reach more customers, and keep them. 
                      <br /> <br /> My favorite of these was by far Computational Science, as I have been exploring different areas of computer programming and networking, and have developed a personal passion towards technology and computers. In my free time, I build websites and web applications (just like this!), experimenting with "Internet of Things" devices and turning my home into a "smart home", and even designing and building circuit boards just for fun. I hope to use these skills to acquire future carreers that allow me to pursue my passion for software development and engineering.
                      <br /><br /> The best thing about graduating with a degree in Interdisciplinary Studies is the exposure to multiple areas of study, in my case specifically, I was able to learn so much about the "business world" through Commerce courses, which helped me better understand the economy and market conditions, as well as proper financial planning and accounting as an entrepreneur/freelancer. These skills are definitely not as exciting to me as writing code, but equally as important in order to be successful both as a freelance developer as well as when I work for a company in the future. 

			        </article>
							</div>
							<div className="tile is-6 is-vertical is-parent">
			        <article className="tile is-child box" id="card3">
			          <p className="title">Experience</p>
								<img src={webApp} alt="webApp" style={{position: "relative", top: "0", height: "40vmin", float: "right"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
                                I have worked with a number of clients on websites as a freelance developer, as well as on a variety of software development projects during my time at the University of Central Florida, and at multiple Hack-A-Thons. I currently work for Apple as a Technical Expert, which means that I diagnose and repair iPhones, which has improved my understanding of, and ability to repair computers and other small electronics. 
                                <br /><br /> The first website I built for someone else was actually a website for an author who was looking for a way to gain more exposure to a new book they had written. This was a great first project for me because the client had already designed a sort of "barebones" version of the website, and I was able to make it look and work better using my web development skills and expertise. 
                                <br /><br /> The skills I have acquired between my role at Apple and my coursework at UCF, I have developed an affinity for Electrical Engineering, and have started to experiment with electronic schematics and printed circuit board design. I hope to be able to one day combine my hobby of electric engineering with my passion for software developemnt, and maybe work for an organization like NASA, SpaceX, or Lockheed Martin, designing flight computers. 
			        </article>
			        <article className="tile is-child box" id="card4">
			          <p className="title">Development Tools and Skills</p>
								<img src={developer} alt="developer" style={{position: "relative", top: "0", height: "40vmin", float: "right	"}}></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
			          I use the following programs and tools when developing websites and mobile apps: Atom, GitHub, NodeJS, ExpressJS, Firebase, Flutter, Visual Studio Code, Travis CI, ReactJS, EmberJS, Xcode, Bulma, Arduino (C++), and advanced Terminal commands. 
                      <br /><br /> Most of my knowledge of programming and software development has actually been acquired outside the classroom, through extracurricular projects and events like the Hack-A-Thons hosted at UCF. These events are extremely beneficial as a way to explore new techniques and skills, and then get immediate feedback from peers and judges at the event. 
                      <br /><br /> The most valuable skill or perspective that I can provide to a company or freelance project is an interdisciplinary mindest -- when approached with a problem, the first thing that I do is write down all the different approaches and possible solutions using my own experience, as well as performing in-depth research to ensure I have included all possible options. By using an interdisciplinary mindset, I can then consider all the options identified and find the best solution by comparing and combining solution sets. This mentality gives me an advantage of finding both a creative and effective solution, which, especially when dealing with websites that strive to highlight certain aspects of a business or entrepreneur, is crucial.
			        </article>
		        	</div>
						</div>
						<div style={{padding: "40px"}}></div>
						<div className="tile is-child">
							<article className="tile is-child container box" id="card">
							<p className="title">Projects</p>
								<div className="columns is-multiline">
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
			</div>
	  );
	}

}

export default IDS;
