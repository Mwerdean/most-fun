import React, { Component } from 'react'
import HoverPicture from './HoverPicture'
import ScentricStore from '../assets/scentric-store-crop.png'
import Musk from '../assets/elon-musk2.png'

const options = {
    max: 0,
    perspective: 1000,
    scale: 1.0,
    translateX: true,
    translateXY: 50
  }

export default class Works extends Component {
    render() {
        return(
            <div className='body'>
            <title>
                    <div>Projects</div>
            </title>
                <div className='projects'>
                    <div className='project-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                        <div className='title-card'>
                            <div>- 0 1</div>
                            <div className='reveal-text1'>Scentric</div>
                        </div>
                    <HoverPicture 
                        options={{}}
                        style={{
                            background: `url(${ScentricStore}) no-repeat  center center`,
                            backgroundSize: 'contain',
                            height: 440,
                            width: 780,
                            animationDelay: '1s',
                            animationDuration: '800ms',
                            animationFillMode: 'both',
                            AnimationTimingFunction: 'cubic-bezier(0.0,0.0,0.2,1)',
                            animationName: 'reveal-text1'
                        }}
                        >
                        <HoverPicture
                            options={options}
                            >
                                <img src={Musk} className='hover-focus' alt=''/>

                        </HoverPicture>
                    </HoverPicture>
                </div>
                <div className='projects'>
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
                <div className='projects'>
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