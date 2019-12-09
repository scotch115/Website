import React from 'react';
import '../../css/style.css';

class App extends React.Conponent {
    render(){
        return (
            <div className="App">
            <div className="animated fadeIn title" >
	        <img src="./images/profilepic.png" style={{ height: 20vw; width: 20vw; position: absolute; top: 60%; left: 10vw; margin-top: -10vw; }}>
				&nbsp &nbsp &nbsp &nbsp Gamache Web Designs
     	    </div>
        	<div className="scroll-down fadeIn"></div>
	        <div className="animated about-banner FadeIn">
            <div id="imgDiv" className="banner-img-a"></div>
            <div className="banner-l"><p className="abt">About :</p>
            	<p className="abtParagraph">
						 My name is Jordan Gamache, and I am a Front-End web developer looking to expand my business. Checkout my <a 	href="https://github.com/scotch115" style="text-decoration: none;">GitHub</a>, or keep scrolling to learn more about me and what I do!
					 </p>
					 </div>
            </div>
			<div className="animated services-banner FadeIn">
	        	<div className="xp"><p>Experience : </p>
					 <p className="xpParagraph">
					 Familiar with a variety of software development languages, I primarily use web development tools such as HTML5, CSS3, JavaScript, as well as a handful of JavaScript libraries like Node.js and Express.js and am proficient in Java, Swift and C. My passion for web development comes from the ability to quickly turn an idea into a reality with a little bit of elbowgrease, and then spend extra time making the end result look and feel good to the user. 
					 </p>
				 </div>
				<div className="animated FadeIn" style="top: 50vh; width: 100%; left: 0; height: 20vmax; position: relative; z-index: 0;">
	            <div className=""><p>Work: </p>
					 <p className="workParagraph">
					 Currently, I work as a Genius Bar Technical Specialist at Apple, and am in my 4th year at the University of Central Florida pursuing a B.S. in Interdisciplinary Studies focusing on Computational Science and Commerce, and minoring in Information and National Security.
					 </p>
				 </div>
				 <p className="withLove"> Made with ♥️ in Orlando </p>
		        </div>
				<div className="theme-switch-wrapper">
	    		<label className="theme-switch" for="checkbox">
						<label id="dm"></label>
	        	<input type="checkbox" id="checkbox" />
	        	<div className="slider round"></div>
					</label>
				</div>
            </div>
        );
    }
}

export default App;