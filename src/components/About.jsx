import React, {useState} from 'react';
import Button from "./Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText("punchvedi.akash96@gmail.com");

        setHasCopied(true);
        setTimeout(() => { setHasCopied(false);}, 2000);


    }

    return (
        <section className= "c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext"> Hi, I am Akash</p>
                            <p className="grid-subtext"> With 4 years of experience, I have honed my skills in frontend
                                and backend development, with a hands on experience on of building web applications
                                ecosystems from scratch along with a focus on client satisfaction.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl: row-span-4">
                    <div className="grid-container">
                        <img src="/assets/grid2%20(1).png" alt="grid-3"
                             className="w-full sm:w-[276px] h-fit object-contain "/>

                        <div>
                            <p className="grid-headtext">Tech Stack </p>
                            <p className="grid-subtext"> Programming Languages:&nbsp; &nbsp;   Javascript, Java </p> &nbsp; &nbsp;
                            <p className="grid-subtext">   Frontend Tech: &nbsp; &nbsp; HTML, CSS, React.JS, &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; Tailwind CSS, MUI, Next.JS</p>&nbsp; &nbsp;
                            <p className="grid-subtext"> Backend Tech: &nbsp; &nbsp; Node.js </p>&nbsp; &nbsp;
                            <p className="grid-subtext"> Database: &nbsp; &nbsp; Mongo DB, SQL</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl: row-span-4">
                    <div className="grid-container">
                        <img src="/assets/globe.png.png" alt="grid-2"
                             className="w-full sm:w-[276px] h-fit object-contain animate-spin-delay"/>

                        <div>
                            <p className="grid-headtext">Open to work across time-zones & locations </p>
                            <p className="grid-subtext">I am based out in New Delhi-NCR, India and open to remote/onsite opportunities
                                across the globe.  </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-4">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code. Coding
                            isn't just my profession - it is my passion. I enjoy exploring new technologies, and enhancing
                            my skills.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-3" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover
                        sm:object-top"/>
                        <div>
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                            <img src= {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white"> punchvedi.akash96@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
