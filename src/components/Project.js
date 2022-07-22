import React from "react";
import '../styles/Project.css';

function Project(){
    return (
        <div id="project">
            <h2>Projects</h2>
            <a href="https://suedepritch.github.io/crispy-spork/">Star War</a><br></br>
            <a href="https://github.com/SuedePritch/crispy-spork">Github link for Star War</a><br></br>
            <img src={require('../assets/images/starwar.png')} className="prjpic"></img><br></br>
            <a href="https://ericthmok.github.io/verbose-giggle/">Horiseon</a><br></br>
            <a href="https://github.com/ericthmok/verbose-giggle/">Github link for Horiseon</a><br></br>
            <img src={require('../assets/images/horiseon.png')} className="prjpic"></img><br></br>
            <a href="https://ericthmok.github.io/bookish-doodle/">Password Generator</a><br></br>
            <a href="https://github.com/ericthmok/bookish-doodle.git">Github link for Password Generator</a><br></br>
            <img src={require('../assets/images/password.png')} className="prjpic"></img><br></br>
            <a href="https://ericthmok.github.io/solid-octo-chainsaw/">Scheduler</a><br></br>
            <a href="https://github.com/ericthmok/solid-octo-chainsaw">Github link for Scheduler</a><br></br>
            <img src={require('../assets/images/scheduler.png')} className="prjpic"></img><br></br>
            <a href="https://ericthmok.github.io/probable-system/">Weather Dashboard</a><br></br>
            <a href="https://github.com/ericthmok/probable-system/">Github link for Weather Dashboard</a><br></br>
            <img src={require('../assets/images/weather.png')} className="prjpic"></img><br></br>
        </div>
    )
}

export default Project;