import React from 'react';
import NavBar from './NavBar';
import './resources.css'

function Resources(props) {
  return (
    <div className='main-rsc-div'>
    <div >
      <NavBar/>
      <h1 className="rsc-title">Resources:</h1>
      <h2 >GROUNDING TECHNIQUES FOR WHEN YOU FEEL ANXIOUS OR OVERWHELMED:</h2>
        <p>
          5: Acknowledge FIVE things you see around you. It could be a pen, a spot on the ceiling, anything in your surroundings.
         <br></br>
          4: Acknowledge FOUR things you can touch around you. It could be your hair, a pillow, or the ground under your feet. 
         <br></br>
          3: Acknowledge THREE things you hear. This could be any external sound. If you can hear your belly rumbling that counts! Focus on things you can hear outside of your body.
         <br></br>
          2: Acknowledge TWO things you can smell. Maybe you are in your office and smell pencil, or maybe you are in your bedroom and smell a pillow. If you need to take a brief walk to find a scent you could smell soap in your bathroom, or nature outside.
         <br></br>
          1: Acknowledge ONE thing you can taste. What does the inside of your mouth taste like—gum, coffee, or the sandwich from lunch?
        </p>
    </div>
      <div className='find-help'>
        <h1 >Find Help: </h1>
        <a className='link' href="https://www.sixftover.org/" target='_blanck'>Six feet over website</a>
        <p className='lifeline'>And if you or someone you know is in crisis, you have options. Please text "SIS" to 741741 to speak with a trained counselor; Call 1-800-273-TALK (8255) for the National Suicide Prevention Lifeline; Call 911; or visit your nearest Emergency Room.</p>
      </div>
      
    </div>
  );
}

export default Resources;


