import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: "1",
            name: "Alex",
            title: "CEO",
            img: "https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
            icon: "assets/youtube.png",
            desc: "Not Available",
        },
        {
            id: "2",
            name: "Bell",
            title: "Senior Developer",
            img: "https://image.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",
            icon: "assets/twitter.png",
            desc: "Not Available",
            featured: true,
        },
        {
            id: "3",
            name: "John",
            title: "Co-Founnder",
            img: "https://image.freepik.com/free-photo/waist-up-shot-handsome-self-confident-cheerful-male-entrepreneur-has-broad-smile_273609-18909.jpg",
            icon: "assets/linkedin.png",
            desc: "Not Available",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (                    
                    <div className={d.featured ? "featured card" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" alt="" className="left" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}
