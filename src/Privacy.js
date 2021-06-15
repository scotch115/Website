import React, { Component } from 'react';
import './App.css';

class Privacy extends Component {
    
    render() { 
        return (
        <div style={{padding: '10px', textAlign: "center"}}>
            <div style={{fontSize: "40px"}}>
                <a href="/" style={{textDecoration: 'none', color: 'black'}}>Privacy Policy </a>
            </div>
            <br /><br />
            <div style={{fontSize: "20px", lineHeight: '50px', margin: '20px'}}>
                Hi! My name is Jordan Gamache, the developer of Quill Journal, Munch, Daily, and Atmos Forecast. As a former Apple employee, and as Software Engineer in general, user (and personal) privacy is a major concern and priority for me anytime I open my laptop and start programming. With every website or application I develop, I strive to utilize existing code or methods that have been tested in order to ensure security of user data, rather than attempting to re-invent the wheel myself and potentially risking privacy or security of the products I create. I primarily use Google products such as <a href="firebase.google.com">Firebase</a> for database storage or website hosting, and <a href="https://developers.google.com/maps/documentation">Google Maps</a> for location searching and communication, because Google has made security and privacy a crucial part of their business in the software field, and you can read more about that <a href="https://policies.google.com/privacy?hl=en-US">here</a>. All in all, I hope that you continue to enjoy using anything that I've built, where it's a mobile app or a website, I welcome any and all feedback, which you can leave this website's homepage at the bottom. 
                <br /><br />Thanks for your support! :)
            </div>
        </div>
        );
    }
}
 
export default Privacy;