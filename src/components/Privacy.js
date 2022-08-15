import React, { Component } from 'react';
import { Button } from 'primereact/button';
import '../styles/App.css';
import Coffee from './Coffee';
import daily from  '../images/showcase-sc.png';
import quill from '../images/journalImage.png';
import munch from '../images/munch.png';
import Project from './Project';

class QuillPrivacy extends Component {
    
    render() { 
        return (
        <div style={{padding: '30px', textAlign: "center"}}>
            <div style={{fontSize: "40px"}}>
                <a href="/" style={{textDecoration: 'none', color: 'black'}}>Privacy Policy </a>
            </div>
            <br /><br />
            <div style={{fontSize: "20px", lineHeight: '50px', margin: '20px'}}>
                Hello <br />
                
                My name is Jordan Gamache, the developer of Quill, Munch, Daily, and Tabla.
                As a former Apple employee and a Software Engineer in general, user privacy is a major concern and priority for me everytime I open my laptop and start programming.
                With every website or application I develop, I strive to utilize existing code or methods that have been tested in order to ensure security of user data,
                rather than attempting to re-invent the wheel myself and potentially risking privacy or security of the products I create.
                I utilize a variety of products developed and maintained by Google, such as <a href="firebase.google.com">Firebase</a> for database storage, hosting, authentication, and more, as well as <a href="https://developers.google.com/maps/documentation">Google Maps </a>
                for location searching and communication. Google has made security and privacy a crucial part of
                <em> their</em> business model, and you can read more about that <a href="https://policies.google.com/privacy?hl=en-US">here</a>. <br />

                All in all, I hope that you continue to enjoy using anything that I've built, whether it's a mobile app or a website, and I welcome any and all feedback, which you can leave on my website. 
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
            <br /><br />
            <Coffee />

            {/* Links to sites covered by privacy policy */}
            <div
                style={{
                    width: '90%',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    left: '5%'
                }}
            >
                <span>
                    <Project
                        title="Daily"
                        link="https://showcase-daily.web.app"
                        img={daily}
                    />
                </span>
                <span>
                    <Project
                        title="Quill"
                        link="https://quill-journal.web.app"
                        img={quill}
                    />
                </span>
                <span>
                    <Project
                        title="Munch"
                        link="https://munchshowcase.web.app"
                        img={munch}
                    />
                </span>
            </div>
        </div>
        );
    }
}
 
export default QuillPrivacy;