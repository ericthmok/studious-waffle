import React from "react";
import '../styles/Footer.css';

function Footer(){
    return (
        <footer className='footer' id='contactmethod'>
            <a href='https://github.com/ericthmok'>GitHub</a><br></br>
            <a href='https://www.linkedin.com/in/ericmokth/'>Linkedin</a><br></br>
            <a href='#'>647-212-0920</a><br></br>
            <a href='#'>ericthmok@gmail.com</a><br></br><br></br>
            <form>
                <a>Leave me a message:</a><br></br>
                <input placeholder="Name"></input><br></br>
                <input placeholder="email"></input><br></br>
                <input placeholder="Message to me"></input>
            </form><br></br><br></br>
            <a href='#head'>HOME</a>
        </footer>
    )
};

export default Footer