import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class Navbar extends Component {
    state = {
        show: false
    }
    componentDidMount() {
        this.setState({show: true})
    }
    componentWillUnmount() {
        this.setState({show: false})
    }
  render() {
    return (
        <div>
        <CSSTransition
            in={this.state.show}
            timeout={10}
            classNames="show-nav"
            >
            <div className={`navbar ${this.props.hamburger ? 'open-nav' : ''}`}>
                <div className='hamburger-helper'>
                    <button className={`hamburger hamburger--collapse ${this.props.hamburger ? 'is-active': ''}`}  onClick={this.props.handleHamburger}type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className='nav-body'>
                    <div className={`vertical-text ${this.props.hamburger ? 'vertical-r' : ''}`}>- Menu</div>
                    <div className={`display-none ${this.props.hamburger ? 'menu-options' : ''}`} >
                        <div>
                            <div className='front-text'>Home</div>
                            <div className='lead-text'>Intro</div>
                        </div>
                        <div>
                            <div className='front-text'>Find Out</div>
                            <div className='lead-text'>About</div>
                        </div>
                        <div>
                            <div className='front-text'>Selection</div>
                            <div className='lead-text'>Projects</div>
                        </div>
                        <div>
                            <div className='front-text'>Lets Chat</div>
                            <div className='lead-text'>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
        </div>
    )
  }
}
