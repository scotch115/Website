import React from 'react';
import ReactDOM from 'react-dom';
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import './App.css';


const Wrapper = styled("div")`
	background: ${props => props.theme.primaryColor};
	width: 100vw;
	height: 100vh;
	body {
		color: ${props => props.theme.fontColor};
	}
	.about-banner {
		background-color: ${props => props.theme.blockBackground};
		border-color: ${props => props.theme.borderColor};
	}
`;


function App() {

	const themeState = useTheme();

  return (
    <div className="App">
			<div className="animated fadeIn title" >
				<img src={require('./images/profilepic.png')} alt="profile" style={{height: "25vw", width: "19vw", position: "absolute", top: "-100px", left: "10vw"}}/>
				 Jordan Gamache
			 </div>
			 <div className="scroll-down fadeIn"></div>
			 <div className="animated about-banner FadeIn">
					<div style={{borderStyle: "solid", borderColor: "var(--border-color)", color: "var(--font-color)", position: "absolute", top: "0", width: "99%", height: "97%", background: "var(--block-background)", textIndent: "40px", zIndex: "1"}}>
						<p style={{position: "absolute", top: "3vmax", left: "8%", fontSize: "1.2vmax", textAlign: "center"}}>
						My name is Jordan Gamache, and I am a Front-End web developer looking to expand my business. Checkout my <a href="https://github.com/scotch115">GitHub</a>, or keep scrolling to learn more about me and what I do!
						</p>
					</div>
				</div>
			 <div className="animated about-banner FadeIn">
						 <div style={{borderStyle: "solid", borderColor: "var(--border-color)", color: "var(-font-color)", position: "absolute", top: "0", width: "99%", height: "97%", background: "var(--block-background)", textIndent: "40px", zIndex: "1"}}>
						 	<p style={{position: "absolute", top: "3vmax", fontSize: "1.2vmax", textAlign: "center", margin: "10px"}}>
					Familiar with a variety of software development languages, I primarily use web development tools such as HTML5, CSS3, JavaScript, as well as a handful of JavaScript libraries like Node.js and Express.js and am proficient in Java, Swift and C. My passion for web development comes from the ability to quickly turn an idea into a reality with a little bit of elbowgrease, and then spend extra time making the end result look and feel good to the user.
							</p>
							</div></div>
			 <div className="animated about-banner FadeIn">
			 		<div style={{borderStyle: "solid", borderColor: "var(--border-color)", color: "var(--font-color)", position: "relative", top: "0", width: "99%", height: "97%", background: "var(--block-background)", textIndent: "40px", zIndex: "1"}}>
						<p style={{position: "absolute", top: "3vmax", right: "8%", fontSize: "1.2vmax", textAlign: "center", margin: "10px" }}>
						Currently, I work as a Genius Bar Technical Specialist at Apple, and am in my 4th year at the University of Central Florida pursuing a B.S. in Interdisciplinary Studies focusing on Computational Science and Commerce, and minoring in Information and National Security.
						</p>
					</div>
			 </div>
				<div style={{ position: "absolute", width: "99vw", top: "255vh", textAlign: "center" }}> Made with ♥️ in Orlando </div>
			 <div className="theme-switch-wrapper">
				 <label className="theme-switch" for="checkbox" onClick={() => themeState.toggle()}>
				 	{themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
					 <label id="dm"></label>
					 <input type="checkbox" id="checkbox" />
					 <div className="slider round"></div>
				 </label>
			 </div>
			</div>
  );
}



export default App;
