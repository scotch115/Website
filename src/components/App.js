import React from 'react';
import AddToHomescreen from 'react-add-to-homescreen';

// PrimeReact Components
import { Card } from 'primereact/card';
import { SpeedDial } from 'primereact/speeddial';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

// PrimeReact Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

// Custom components
import Project from './Project';
import Coffee from './Coffee';

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
import es from '../images/embedabble-site.png';

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

		let carouselItems = [
			{ 
				title: "Snowcap Coffee",
				link: "https://snowcap-coffee.web.app",
				image: sc,
			},
			{
				title: "Simply Boba",
				link: "https://simply-boba.web.app",
				image: sb,
			},
			{
				title: "Embeddable Sites",
				link: "https://embedabble-site.web.app",
				image: es,
			},
			{
				title: "Daily - To-Do App",
				link: "https://showcase-daily.web.app",
				image: show,
			},
			{
				title: "Quill Journal",
				link: "https://quill-journal.web.app",
				image: journal,
			},
			{
				title: "Munch - Restaurant App",
				link: "https://munchshowcase.web.app",
				image: munchShow,
			},
			{
				title: "Trek Noise - Depracated",
				link: "https://trek-noise.web.app",
				image: tn,
			},
			{
				title: "Tom Gamache Books",
				link: "https://tomgamachebooks.web.app",
				image: tg,
			},
		];

		const itemTemplate = (template) => {
			return <Project title={template.title} link={template.link}  img={template.image} />
		};

		const responsiveOptions = [
			{
					breakpoint: '1700px',
					numVisible: 3,
					numScroll: 3
			},
			{
					breakpoint: '768px',
					numVisible: 2,
					numScroll: 2
			},
			{
					breakpoint: '560px',
					numVisible: 1,
					numScroll: 1
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
								JavaScript, React (and Hooks), Node.JS, PrimeReact, CSS, npm, yarn, MongoDB, Express.JS, Webpack, Rollup, AJV, JSON, C, Swift/SwiftUI, HTML, Java, Dart, Ember.JS, Firebase, Flutter, C++ (Microprocessor Development), Git, GitHub, GitLab, Slack, VS Code, Xcode, Bootstrap, Bulma
							</Card>
						</div>
					</div>
					<span style={{padding: "40px"}} />
					<div className="tile is-child">
						<Card 
							title="Projects"
							className="container box"
							style={{ maxWidth: '95vw' }}
						>
							<img src={projectBuild} style={{height: "180px"}} alt="Factory"></img>
								<Carousel
									value={carouselItems}
									itemTemplate={itemTemplate}
									numVisible={3}
									numScroll={1}
									className="test"
									responsiveOptions={responsiveOptions}
									style={{ width: '100%'}}
								>
								</Carousel>
						</Card>
					</div>
					<div style={{padding: "2vh"}}></div>
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
			{/**
			 * Decided that I hate the idea of these being public, so I'm taking them down temporarily
			 */}
			{/* <div id='spacer' />
			<div className="tile is-child">
				<Tooltip
					target=".gh-badge"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '300px',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://github.com/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://avatars.githubusercontent.com/u/22224970?s=120&amp;v=4" alt="@scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'end',
							alignItems: 'end',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						>Arctic Code Vault Contributor </div>
							<p
								style={{
									position: 'relative',
									right: '0px',
								}}
							>
								<span>
										Contributed code to a repository in the <a href="https://archiveprogram.github.com/">2020 GitHub Archive Program</a>
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".google-badge-firebase-flutter"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '100%',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://g.dev/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://avatars.githubusercontent.com/u/22224970?s=120&amp;v=4" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Firebase - Flutter
						</div>
							<p>
								<span>
									Completed the 'Add Firebase to your Flutter app' developer course
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".google-badge-firebase-web"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '100%',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://g.dev/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://avatars.githubusercontent.com/u/22224970?s=120&amp;v=4" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Firebase Web
						</div>
							<p>
								<span>
									Completed the 'Build your first web app with Firebase' developer course
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".google-badge-firebase-monitor"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '100%',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://g.dev/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://avatars.githubusercontent.com/u/22224970?s=120&amp;v=4" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Firebase Monitoring
						</div>
							<p>
								<span>
										Completed 'Monitor new features with Firebase Performance Monitoring' developer course
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".google-badge-firebase-messaging"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '100%',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://g.dev/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://avatars.githubusercontent.com/u/22224970?s=120&amp;v=4" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Firebase Messaging
						</div>
							<p>
								<span>
									Completed the 'Message users with FCM and FIAM' developer course
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".hacktoberfest-21"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '300px',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://dev.to/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--slf7COFx--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/272502/7aa1a76b-4fd6-485e-89dc-9224e8d3ac58.jpeg" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Hacktoberfest 2021
						</div>
							<p>
								<span>
									Participated in Digital Ocean's Hacktoberfest 2021
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<Tooltip
					target=".hacktoberfest-20"
					position='top'
					style={{
						width: '300px',
					}}
					autoHide={false}
				>
							<span
					style={{
						width: '300px',
						height: 'auto',
						display: 'flex',
						padding: '10px',
						marginTop: '10px',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<a href="https://dev.to/scotch115" style={{ width: '200px' }}>
						<img style={{
							clipPath: 'circle(50%)'
						}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--slf7COFx--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/272502/7aa1a76b-4fd6-485e-89dc-9224e8d3ac58.jpeg" alt="scotch115" width="60" height="60" />
					</a>      
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								fontWeight: '700'
							}}
						> 
							Hacktoberfest 2020
						</div>
							<p>
								<span>
									Participated in Digital Ocean's Hacktoberfest 2020
								</span>
							</p>
						</div>
				</span>
				</Tooltip>
				<div className='container box'>
					<div className='title'> Developer Badges </div>
					<div className="columns is-multiline"
					style={{
						padding: '30px',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
					}}>
						<a href="https://archiveprogram.github.com/" className='gh-badge'>
							<img alt="Arctic Code Vault Contributor" src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png" width="64px" />
						</a>
						<a href="https://developers.google.com/profile/badges/playlists/firebase/add_firebase_to_flutter" className='google-badge-firebase-flutter'>
							<img alt="Google Developer Badge" src="https://developers.google.com/profile/badges/playlists/firebase/add_firebase_to_flutter/firebase-flutter.svg" width="64px" />
						</a>
						<a href="https://developers.google.com/profile/badges/playlists/firebase/web-apps-with-firebase" className='google-badge-firebase-web'>
							<img alt="Google Developer Badge" src="https://developers.google.com/profile/badges/playlists/firebase/web-apps-with-firebase/badge.svg" width="64px" />
						</a>
						<a href="https://developers.google.com/profile/badges/playlists/firebase/firebase-performance-monitoring" className='google-badge-firebase-monitor'>
							<img alt="Google Developer Badge" src="https://developers.google.com/profile/badges/playlists/firebase/firebase-performance-monitoring/badge.svg" width="64px" />
						</a>
						<a href="https://developers.google.com/profile/badges/playlists/firebase/messaging-with-firebase" className='google-badge-firebase-messaging'>
							<img alt="Google Developer Badge" src="https://developers.google.com/profile/badges/playlists/firebase/messaging-with-firebase/messaging-with-firebase.svg" width="64px" />
						</a>
						<a href="https://dev.to/badge/hacktoberfest-2021" className='hacktoberfest-21'>
							<img alt="Hacktoberfest 21 Badge" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1l8Lf2vD--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/131/hacktoberfest-2021-badge.png" width="64px" />
						</a>
						<a href="https://dev.to/badge/hacktoberfest-2020" className='hacktoberfest-20'>
							<img alt="Hacktoberfest 20 Badge" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ajGtUgSU--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/80/hacktoberfest2020-badge_2.png" width="64px" />
						</a>
					</div>
				</div>
			</div>

			<div id='spacer' />
				<div className="tile is-child" id="blog">
					<div className='container box'>
						<div className='title'> Blog Articles </div>
						<div className="columns is-multiline" style={{ padding: '30px'}}>
							<div
								className='column'
								id="project"
								style={{ cursor: 'pointer' }}
								onClick={() => window.open('https://deciduous-jester-882.notion.site/Intro-To-Programming-2be9cc74fe65415d8d370c3a097a0050', '_blank')}
							>
								<Card
									title='Intro to Programming'
									subTitle={`I’ve compiled some resources throughout my journey as a software engineer, and made this list for anyone who might want to start learning how to program given the different fields...`}
									style={{ height: '100%' }}
									header={
										<img
											alt='blogcard1'
											src='https://deciduous-jester-882.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5c8afdbc-f1d4-4da1-a81f-473bc1d2c9c7%2FScreen_Shot_2021-06-06_at_21.05.11.png?table=block&id=2be9cc74-fe65-415d-8d37-0c3a097a0050&spaceId=71db66c3-b812-464e-92b5-e5b8d9bea7b9&width=2000&userId=&cache=v2'
										/>
									}
								>
								</Card>
							</div>
							<div id='spacerH' />
							<div
								className='column'
								id="project"
								style={{ cursor: 'pointer' }}
								onClick={() => window.open('https://deciduous-jester-882.notion.site/Learning-Web-Development-4fd437257b444e9bbb40be4f8b4ae293', '_blank')}
							>
								<Card
									title='Learning Web Development'
									subTitle={`Web Development is such a broad term, with so many sub components, that trying to learn can feel *really* overwhelming, so l’ve split up some of the components that make up developing a website into bite-sized chunks.`}
									style={{ height: '100%' }}
									header={
										<img
											alt='blogcard2'
											src='https://deciduous-jester-882.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8e00a44-6024-45d1-b3dc-9d8224d4886e%2Freact-space.jpg?table=block&id=4fd43725-7b44-4e9b-bb40-be4f8b4ae293&spaceId=71db66c3-b812-464e-92b5-e5b8d9bea7b9&width=2000&userId=&cache=v2'
										/>
									}
								>
								</Card>
							</div>
							<div id='spacerH' />
							<div
								className='column'
								id="project"
								style={{ cursor: 'pointer' }}
								onClick={() => window.open('https://deciduous-jester-882.notion.site/Building-an-iOS-App-using-SwiftUI-all-on-an-iPad-500a785d5d074edabd483a4f70e13ee4', '_blank')}
							>
								<Card
									title='Building an iOS App using SwiftUI — all on an iPad'
									subTitle={`When Swift Playgrounds 4 was announced in June of 2021, I was thrilled to know that the investment I made in my 2019 11” iPad Pro was finally going to be worth it!`}
									style={{ height: '100%' }}
									header={
										<img
											alt='blogcard3'
											src='https://deciduous-jester-882.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F02c160d3-4442-4c6a-9115-6ea557c8f354%2FswiftUI.jpg?table=block&id=500a785d-5d07-4eda-bd48-3a4f70e13ee4&spaceId=71db66c3-b812-464e-92b5-e5b8d9bea7b9&width=2000&userId=&cache=v2'
										/>
									}
								>
								</Card>
							</div>
						</div>
					</div>
				</div> */}
			

			<span style={{height: "10vh"}} />
			 <footer className="hero-foot">
				<div className="content has-text-centered">
				 Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i> in Orlando
				</div>
			 </footer>
			 <Coffee />
			</div>
			<AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
		</div>
	  );
	}

}

export default App;
