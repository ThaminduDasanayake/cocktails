import {openingHours, socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", {type: "words"});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.inOut",
        });

        timeline
            .from(titleSplit.words, {opacity: 0, yPercent: 100, stagger: 0.02})
            .from("#contact h3", {opacity: 0, yPercent: 100, stagger: 0.02})
            .to("#f-right-leaf", {y: "-50", duration: 1, ease: "power1.inOut"})
            .from("#f-left-leaf", {x: "-50", duration: 1, ease: "power1.inOut"}, "<");
    });


    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" id="f-right-leaf" alt="right-leaf"/>
            <img src="/images/footer-left-leaf.png" id="f-left-leaf" alt="left-leaf"/>

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>No. 27, Galle Road, Colombo 03, Sri Lanka</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>011 234 5678</p>
                    <p>opaline@cocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map(({day, time}) => (
                        <p key={day}>
                            {day} : {time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map(({name, icon, url}) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                            >
                                <img src={icon} alt={name}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Contact;
