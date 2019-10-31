import React from 'react';
import styles from './style.css';

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta property="og:title" content="Gamache Web Designs" />
        <meta property="og:image" content="../images/link_preview.png" />
        <title>Welcome to Gamache Web Designs</title>
        <link rel="icon" href="../images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="114x114" href="../images/apple-touch-icon.png" />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* Styles */}
				<link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" type="text/css" href="../../public/css/materialize.css" />
        <p className="dm">🌙</p>
        <div className="${styles.animated, style.fadeIn, styles.title}">
          Gamache Web Designs
        </div>
        <div className="scroll-down fadeIn" />
        {/* About */}
        <div className="animated about-banner FadeIn">
          {/* Want to set up scroller div panels with info from each link, rather than having multiple pages */}
          <div id="imgDiv" className="banner-img-a" />
          <div className="banner-l"><p style={{textIndent: '20px', lineHeight: 2.0}}>About :</p>
            <p style={{position: 'absolute', top: '3vmax', left: '8%', fontSize: '1.2vmax', textAlign: 'center'}}>
              Welcome to Gamache Web Designs, a private, Orlando-based web-development firm.
              Here, our number one priority is customer satisfaction, and user experience.
              We would love you help you and your business thrive and reach more customers, with an elegant website.
            </p>
            <i style={{position: 'absolute', bottom: '12%', left: '30%'}} className="material-icons large">code</i>
            <i style={{position: 'absolute', bottom: '12%', left: '45%'}} className="material-icons large">add</i>
            <i style={{position: 'absolute', bottom: '12%', left: '60%'}} className="material-icons large">laptop_mac</i></div>
        </div>
        {/* Services */}
        <div className="animated services-banner FadeIn">
          <div id="imgDiv" className="banner-img-s"><p>Services : </p>
            <p style={{position: 'absolute', top: '3vmax', right: '8%', fontSize: '1.2vmax', justify: 'center'}}>
              Using modern web-development practices and development languages, you can rest assured that your site will
              not just look good, but it will perform well, and is secure. We expect the best from others, and only the best from ourselves.
            </p>
          </div>
          <div className="banner-r"><p style={{textIndent: '20px', lineHeight: 2.0}}>
              <img src="https://img.icons8.com/ios-glyphs/60/000000/internet-of-things.png" className="iot" />
              <img src="https://img.icons8.com/ios-glyphs/60/000000/server.png" className="server" />
              <img src="https://img.icons8.com/ios-glyphs/60/000000/wifi-router.png" className="router" />
              <img src="https://img.icons8.com/ios-glyphs/60/000000/ios-development.png" className="ios-dev" />
            </p></div>
          <div className="card">
            <div className="github-card" data-github="scotch115" data-theme="medium" data-width={300} />
            <img className="travis" src="https://travis-ci.com/scotch115/Website.svg?branch=master" />
            {/* <p style="position: absolute; top: 300%;"> Made with ♥️ in Orlando </p> fix this later */} 
          </div>
        </div>
        {/* Dark Mode Switcher */}
        <div className="theme-switch-wrapper">
          {/* <em>Dark Mode</em> */}
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round" />
          </label>
        </div>
      </div>
    );
  }
});
