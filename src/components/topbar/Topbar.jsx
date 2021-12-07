import "./topbar.scss"
import { Mail, GitHub, LinkedIn, Call } from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">My Portfolio</a>
                    <div className="itemContainer">
                        <a className="iconLink" href="https://www.linkedin.com/in/mohammad-al-kaium" target="_blank">
                            <LinkedIn className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a className="iconLink" href="https://github.com/githubkaium" target="_blank">
                            <GitHub className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a className="iconLink" href="#contact">
                            <Mail className="icon" />
                            <span>mailtokaium@gmail.com</span></a>
                    </div>
                    <div className="itemContainer">
                    <a className="iconLink" href="#contact">
                        <Call className="icon" />
                        <span>+880 1799 099 990</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
