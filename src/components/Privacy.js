import React, { Component } from 'react';
import { Button } from 'primereact/button';
import '../styles/App.css';

class QuillPrivacy extends Component {
    
    render() { 
        return (
        <div style={{padding: '30px', textAlign: "center"}}>
            <div style={{fontSize: "40px"}}>
                <a href="/" style={{textDecoration: 'none', color: 'black'}}>Privacy Policy </a>
            </div>
            <br /><br />
            <div style={{fontSize: "20px", lineHeight: '50px', margin: '20px'}}>
                Hi! My name is Jordan Gamache, the developer of Quill Journal, Munch, Daily, Atmos Forecast, and Tabla.
                As a former Apple employee and current Software Engineer, user privacy is a major concern and priority for me everytime I open my laptop and start programming.
                With every website or application I develop, I strive to utilize existing code or methods that have been tested in order to ensure security of user data,
                rather than attempting to re-invent the wheel myself and potentially risking privacy or security of the products I create.
                I primarily use Google products such as <a href="firebase.google.com">Firebase</a> for database storage or website hosting, and <a href="https://developers.google.com/maps/documentation">Google Maps</a>
                for location searching and communication, because Google has made security and privacy a crucial part of
                their business in the software field, and you can read more about that <a href="https://policies.google.com/privacy?hl=en-US">here</a>.
                All in all, I hope that you continue to enjoy using anything that I've built, whether it's a mobile app or a website, I welcome any and all feedback, which you can leave on my website. 
                <br /><br />Thanks for your support! :)
            </div>
            <br /><br />
            <Button
                label="jordangamache.io"
                className='p-button-rounded'
                onClick={() => {
                    window.open('https://jordangamache.io', '_blank');
                }}
            />
        </div>
        );
    }
}
 
export default QuillPrivacy;