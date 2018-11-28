import React, { Component } from 'react'
import HoverPicture from './HoverPicture'
import ScentricStore from '../assets/scentric-store-crop.png'
import Musk from '../assets/elon-musk2.png'

const options = {
    max: 0,
    perspective: 1000,
    scale: 1.1,
    translateX: true,
    translateXY: 40
  }

export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animate: false
        }
        this.ref1 = React.createRef()
    }
    componentWillMount() {
        console.log(this.ref1)
        window.addEventListener('scroll', (event) => {
            let scrollTop = event.srcElement.scrollingElement.scrollTop
            console.log(this.ref1.current.scrollHeight)
            console.log('scrollTop', scrollTop)
            if(scrollTop > this.ref1.current.scrollHeight + 200) {
                this.setState({ animate: true})
            }          
        })
    }
    render() {
        return(
            <div className='body'>
                <title>
                        <div>Selected works</div>
                        <div>2017 - 2018</div>
                </title>
                <div className='projects' ref={this.ref1}>
                    <div className='project-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                        <div className='title-card'>
                            <div>- 0 1</div>
                            {this.state.animate &&
                            <div className={this.state.animate ? `reveal-text1`: ``}>Scentric</div>
                            }
                            </div>
                    <HoverPicture 
                        options={{}}
                        animate={this.state.animate}
                        style={{
                            background: `url(${ScentricStore}) no-repeat  center center`,
                            backgroundSize: '780px 440px',
                            height: 440,
                            width: 680,
                        }}
                        >
                        <HoverPicture
                            options={options}
                            >
                                <img src={Musk} className='hover-focus' alt=''/>

                        </HoverPicture>
                    </HoverPicture>
                </div>
                <div className='projects works-top-margin'>
                    <HoverPicture 
                        options={{}}
                        style={{
                            background: `url(${ScentricStore}) no-repeat  center center`,
                            backgroundSize: 'contain',
                            height: 440,
                            width: 780,
                        }}
                    />
                    <div className='project-description2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className='projects works-top-margin'>
                    <div className='project-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <HoverPicture 
                        options={{}}
                        style={{
                            background: `url(${ScentricStore}) no-repeat  center center`,
                            backgroundSize: 'contain',
                            height: 440,
                            width: 780,
                        }}
                    />
                </div>
            </div>
        )
    }
}