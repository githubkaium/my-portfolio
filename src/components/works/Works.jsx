import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "Online Shop Website",
            desc: "Google sign-in and Email Sign-in enabled. Admin can manage All Products and Orders. Include JWT verification system. Swagger integrated",
            img: "./assets/online-shop.png",
            project: "https://pipilica-shop.web.app",
            link1: "https://github.com/githubkaium/pipilica-shop-client-pp",
            link2:"https://github.com/githubkaium/pipilica-shop-server-pp",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Courier Service Website",
            desc: "A Courier Service Website. Required log-in to Booking and Manage Services. Google sign-in and Email sign-in enabled.",
            img: "./assets/courier-service.png",
            project: "https://pipilica-courier.web.app",
            link1: "https://github.com/githubkaium/pipilica-courier-client-pp",
            link2:"https://github.com/githubkaium/pipilica-courier-server-pp",
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "Health Service Website",
            desc: "A health care service website. Provide different services. Required Log in to Appointment. Google sign in enabled.",
            img: "./assets/health-service.png",
            project: "https://health-guard-9073c.web.app",
            link1: "https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-githubkaium",
            link2:"https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-githubkaium",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <a href={d.project} target="_blank">Project</a>
                                    <a href={d.link1} target="_blank">Github link1</a>
                                    <a href={d.link2} target="_blank">Github link2</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
        </div>
    )
}
