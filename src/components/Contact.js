import React, { Component } from 'react'
import portrait from '../assets/portrait.jpg'
import resume from '../assets/resume.jpg'
export default class Contact extends Component {
    render() {
        return(
            <div className = 'contact' ref={this.props.contactRef}>
                <title>
                    <div>Contact</div>
                    <div>About Me</div>
                </title>
                <div className='contact-info'>
                    <img src={portrait} />
                    <div>
                        <div>
                        Hello! I’m Matthew, a web designer residing in the beautiful city of Tempe. I’ve been designing for about 2 years, working on all sorts of projects; from simple clean websites through to branding and packaging design. I'm always keen to hear about new collaborations and interesting projects so feel free to shoot me a message.
                        </div>
                        <div className='contact-buttons'>
                            <a href="mailto:mwerdean@gmail.com"><span>Contact</span></a>
                            <a href={resume} download><span>Resume</span></a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}