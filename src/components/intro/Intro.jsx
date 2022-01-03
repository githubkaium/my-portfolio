import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1200,
            backSpeed: 25,
            strings:["HTML, CSS, JavaScript, C, C++", "Mongo DB, Express JS, React JS, Node JS","MaterialUI, Bootstrap, Tailwind" ]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/my-full-portfolio-img.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Assalamu Alaikum, I'm</h2>
                    <h1>MOHAMMAD AL KAIUM</h1>
                    <h3>Skills: <span ref={textRef}></span></h3>
                <div className="resumeBtn">
                    {/* <a href="assets/Resume of MOHAMMAD AL KAIUM.pdf" download="Resume of MOHAMMAD AL KAIUM.pdf"> */}
                    <a href="https://docs.google.com/document/d/1wECMsTn_0eJpHirFNTElpxY5De-xcZgET9RVmNpd82I/edit?usp=sharing" target="_blank">
                    <button>Get My Resume</button>
                    </a>
                    </div>
                </div>
                <div className="d-arrow">
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}
