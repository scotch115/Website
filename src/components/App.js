import React from 'react';
import AddToHomescreen from 'react-add-to-homescreen';

// PrimeReact Components
import { Card } from 'primereact/card';
import { SpeedDial } from 'primereact/speeddial';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// PrimeReact Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

// Custom component
import Project from './Project';

// Image sources
import sb from '../images/simply-sc.png';
import tg from '../images/tg.png';
import sc from '../images/snowcap.png';
import tn from '../images/treknoise.png';
import show from '../images/showcase-sc.png';
import wireframe from '../images/wireframe.png';
import webApp from '../images/web_app.png';
import developer from '../images/developer.png';
import hello from '../images/hello.png';
import munchShow from '../images/munch.png';
import rocket from '../images/rocket_project.png';
import flightCPU from '../images/flightComputer.PNG';
import projectBuild from '../images/build.png';
import journal from '../images/journalImage.png';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dialog: false,
			name: '',
			email: '',
			subject: '', 
			fieldMsg: '',
		}

		this.onClick = this.onClick.bind(this);
		this.onHide = this.onHide.bind(this);
		this.showDownloadSuccess = this.showDownloadSuccess.bind(this);
	}

	onClick(name, position) {
		let state = {
				[`${name}`]: true
		};

		if (position) {
				state = {
						...state,
						position
				}
		}

		this.setState(state);
		}

		onHide(name) {
				this.setState({
						[`${name}`]: false
				});
		}

		showDownloadSuccess() {
			this.toast.show({ severity:'success', summary: 'Resumé Downloaded', detail:'Check your downloads folder for my resumé!', life: 3000 });
		}

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


	render() {
		let menuItems = [
			{
				label: 'GitHub',
				icon: 'pi pi-github',
				command: () => {
					window.open('https://github.com/scotch115', '_blank');
				}
			},
			{
				label: 'LinkedIn',
				icon: 'fab fa-linkedin',
				command: () => {
					window.open('https://www.linkedin.com/in/jordan-gamache-374417165', '_blank');
				}
			},
			{
				label: 'Resume',
				icon: 'pi pi-file',
				command: () => {
					window.open('files/JordanGamacheResume.pdf', 'download');
					this.showDownloadSuccess();
				}
			},
			{
				label: 'Stack',
				icon: 'fab fa-react',
				command: () => {
					this.onClick('dialog');
				}
			}
		];

		return (
			<div className="App" style={{backgroundColor: "rgb(241, 241, 241)"}}>
			<Dialog
				header="This website is built on the FERN stack."
				visible={this.state.dialog}
				style={{ width: '80vw' }}
				onHide={() => this.onHide('dialog')}
			>
				FERN is an acronym for a Full Stack (or all inclusive) method of web development. In particular, the FERN stack incorporates some of the most popular frameworks and tools to accompany traditional web development techniques. FERN uses Firebase, Express.js, React.js, and Node.js. These allow the site to be flexible, responsive, lightweight, and yet still powerful and precise. The FERN stack is my personal favorite and most comfortable method for building Web Apps like this one, however I have some familiarity with the MERN (MongoDB/Express/React/Node) stack as well.
			</Dialog>
			<Toast
				ref={(el) => this.toast = el}
				position={"top-left"}
			/>
			<div className="hero is-medium">
				<div style={{ position: 'absolute', top: '20px', right: '70px'}}>
					<SpeedDial
						model={menuItems}
						type="quarter-circle"
						direction="down-left"
						radius={100}
						showIcon="pi pi-ellipsis-v"
						transitionDelay={80}
						buttonStyle={{ padding: '10px', width: '100%', height: '40%', backgroundColor: 'rgba(19, 158, 254, 1)'}}
					/>
				</div>
			 <div id="header" style={{backgroundColor: "white", height: "500px"}}>
				<div className="container has-text-centered">
				<div id="spacer"> </div>
					<div className="title">
						<img className="JGlogo" id="logo" src="images/JGlogo.png" alt="logo" width="170" height="190"/>
					</div>
					<p className="subtitle" id="subtitle">
						<strong> Jordan Gamache </strong>
					</p>
				</div>
			 </div>
			 <span style={{height: "10vh"}} />
			 <div className="container">
				<div className="tile is-ancestor">
					<div className="tile is-vertical is-6 is-parent">
					<Card
							id="card1"
							title="Hi there! 👋🏻"
							className='className="tile is-child box'
						>
							<img className="cardImage" src={hello} alt="hello"></img>
								I'm Jordan Gamache, a software engineer with a passion for front end UI/UX design, building websites in JavaScript with frameworks like React, and mobile applications using Dart.
						</Card>
						<Card
							id="card2"
							title="Languages"
							className='className="tile is-child box'
						>
							<img className="cardImage" src={webApp} alt="webApp"></img>
							I primarily work with the "standard" web development programming languages such as HTML, CSS, and JavaScript, but I also have experience working with Swift, C, Java, and recently Dart. I enjoy learning new skills, especially when it comes to software and engineering, and plan to continue learning new, applicable languages.
						</Card>
						</div>
						<div className="tile is-6 is-vertical is-parent">
						<Card
							id="card3"
							title="Experience"
							className='className="tile is-child box'
							>
								<img className="cardImage" src={wireframe} alt="wireframe"></img>
								I am a graduate from the University of Central Florida where I studied Interdisciplinary Studies in Computational Science and Commerce, and Minored in National Intelligence and Security. I currently work for Itential as a software engineer where I build and maintain UI components (and some backend operations) for <a href="https://www.itential.com/products/automation-platform/" style={{textDecoration: 'none'}}>Itential's network Automation Platform</a>.
							</Card>
							<Card
								id="card4"
								title="Development Tools"
								className='className="tile is-child box'
								>
								<img className="cardImage" src={developer} alt="developer"></img>
								<div className="has-text-centered" style={{padding: "10px"}}></div>
								Atom, GitHub, NodeJS, ExpressJS, Firebase, Flutter, Visual Studio Code, Travis, ReactJS, Xcode, Bulma/Bootstrap, Terminal, Arduino (C++), GitLab, Jira, Slack, Docker
							</Card>
						</div>
					</div>
					<span style={{padding: "40px"}} />
					<div className="tile is-child">
						<Card 
							title="Projects"
							className="tile is-child container box">
							<div className="columns is-multiline">
							<img src={projectBuild} style={{height: "80px"}} alt="Factory"></img>
							<div className="column"><Project title="Snowcap Coffee" link="https://snowcap-coffee.web.app" img={sc}/></div>
								<div className="column"><Project title="Simply Boba" link="https://simply-boba.web.app" img={sb} /></div>
								<div className="column"><Project title="Trek Noise" link="https://trek-noise.web.app" img={tn}/></div>
								<div className="column"><Project title="Daily - To-Do App" link="https://showcase-daily.web.app" img={show}/></div>
								<div className="column"><Project title="Munch - Restaurant App" link="https://munchshowcase.web.app" img={munchShow}/></div>
								<div className="column"><Project title="Tom Gamache Books" link="https://tomgamachebooks.web.app" img={tg}/></div>
								<div className="column"><Project title="Quill Journal" link="https://quill-journal.web.app" img={journal}/></div>
							</div>
						</Card>
					</div>
					<div style={{padding: "5vh"}}></div>
			 </div>
			 <div className="tile is-child">
				 <Card title="Hobby Projects" className='container box'>
					 <div className="columns">
					 <img src={rocket} style={{height: "200px"}} alt="Rocket"></img>
					 <div className="column is-6" ><Project title="Arduino Flight Computer" link="https://github.com/scotch115/Arduino-Telemetry.git" img={flightCPU} /></div>
					 </div>
					 </Card>
				 <div style={{padding: "2vh"}}></div>
			 </div>
			 
			 <div className="section-body">
				 <div className="container box">
					<form action="https://usebasin.com/f/88688e738fdc" method="POST">
						<div className="title">
								Want to work together?
							</div><div className="field is-horizontal">
									<div className="field-label is-normal">
										{/* <label className="label">From</label> */}
									</div>
									<div className="field-body">
										<div className="field" style={{ width: '100%' }}>
											<span className='p-float-label p-input-icon-left' style={{ width: '100%' }}>
												<i className='pi pi-user' />
												<InputText
													id='name'
													name="name"
													className="p-inputtext-lg p-d-block"
													style={{ width: 'inherit' }}
													value={this.state.name}
													onChange={(e) => {
														this.setState({
															name: e.target.value,
														})
													}}
												/>
												<label htmlFor='name'> Name </label>
											</span>
										</div>
										<div style={{ height: '3vw' }} />
										<div className="field" style={{ width: '100%' }}>
											<span className='p-float-label p-input-icon-left' style={{ width: '100%' }}>
												<i className='pi pi-envelope' />
												<InputText
													id='email'
													name="email"
													className="p-inputtext-lg p-d-block"
													style={{ width: 'inherit' }}
													value={this.state.email}
													onChange={(e) => {
														this.setState({
															email: e.target.value,
														})
													}} />
												<label htmlFor='email'> Email </label>
											</span>
										</div>
									</div>
									<div style={{ height: '3vw' }} />
								</div><div className="field is-horizontal">
									<div className="field-label is-normal">
										{/* <label className="label">Subject</label> */}
									</div>
									<div className="field-body">
										<div className="field" style={{ width: '100%' }}>
											<span className='p-float-label p-input-icon-left' style={{ width: 'inherit' }}>
												<i className='pi pi-id-card' />
												<InputText
													id='subject'
													name="subject"
													className="p-inputtext-lg p-d-block"
													value={this.state.subject}
													style={{ width: 'inherit' }}
													onChange={(e) => {
														this.setState({
															subject: e.target.value,
														})
													}} />
												<label htmlFor='subject'> Subject </label>
											</span>
										</div>
									</div>
									<div style={{ height: '3vw' }} />
								</div><div className="field is-horizontal">
									<div className="field-label is-normal">
										{/* <label className="label">Message</label> */}
									</div>
									<div className="field-body">
										<div className="field" style={{ width: '100%' }}>
											<span className='p-float-label p-input-icon-left' style={{ width: '100%' }}>
												<i className='pi pi-pencil' />
												<InputText
													id='fieldMsg'
													name="message"
													style={{ width: 'inherit' }}
													className="p-inputtext-lg p-d-block"
													value={this.state.fieldMsg}
													onChange={(e) => {
														this.setState({
															fieldMsg: e.target.value,
														})
													}} />
													<label htmlFor='messge'> Message </label>
											</span>
											<p className="help">
												*This field is required
											</p>
										</div>
									</div>
								</div><div className="field is-horizontal">
									<div className="field-label">
									</div>
									<div className="field-body">
										<div className="field">
											<Button
												className="p-button-rounded"
												label="Send message"
												iconPos="left"
												icon="pi pi-send"
											/>
										</div>
									</div>
								</div>
							</ form>
					</div>
			</div>

			<span style={{height: "10vh"}} />
			 <footer className="hero-foot">
				<div className="content has-text-centered">
				 Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i> in Orlando
				</div>
			 </footer>
			</div>
			<AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
		</div>
	  );
	}

}

export default App;
