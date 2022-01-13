import React, { useEffect } from 'react';

import me from '../../../dist/images/1633797727046.jpg';

import './LandingImage.scss';

class LandingImage extends React.Component {
  render() {
    return (
      <div className="landing-screen">
        <img src={me} />
        <div>
        <div className="points">
          <h1><span id="hello">Hello,</span><br/> my name is Bailey</h1>
          <h2>I am a software developer proficient in HTML, CSS, Javascript, Angular and React.</h2>
        </div>
        <div className="buttons fade-in">
          <button className="swipe">Github <i className="fab fa-github"></i></button>
          <button className="swipe">LinkedIn <i className="fab fa-linkedin"></i></button>
          <button className="swipe">Resume <i className="far fa-file"></i></button>
        </div>
        </div>
   
        
      </div>
    )
  }
}

export default LandingImage;
