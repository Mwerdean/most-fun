import React, { Component } from 'react'
import Navbar from './Navbar'
import TitleAnimation from './TitleAnimation'
import Works from './Works'
import About from './About'


export default class MainWrapper extends Component {
    state = {
        hamburger: false
    }

    handleHamburger = () => {
        this.setState({ hamburger: !this.state.hamburger })
    }

    render() {
        return(
            <div className='br'>
                <Navbar 
                    handleHamburger={this.handleHamburger}
                    hamburger={this.state.hamburger}
                    />
                <TitleAnimation left={this.state.hamburger} />
                <About />
                <Works />
                <div className='nothing'></div>
            </div>
        )
    }
}