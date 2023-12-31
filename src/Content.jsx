import { useEffect, useRef } from "react"
import ConnectBar from "./components/ConnectBar";
import Footer from "./components/Footer";
import JobCard from "./components/JobCard";
import ProjectCard from "./components/ProjectCard";
import { jobData, projectData, socialLinks } from "./data";

const Content = () => {

    const headerRef = useRef();
    const subHeaderRef = useRef();
    const contactSectionRef = useRef();
    const jobSectionRef = useRef();
    const projectSectionRef = useRef();

    const intersectionCallback = (elements) => {
        elements.forEach((element) => {
            const classList = element.target.classList;
            switch (classList[0]) {
                case 'transform-transition':
                    if (element.isIntersecting) {
                        element.target.classList.remove('-translate-x-[150%]')
                        element.target.classList.remove('translate-x-[150%]')
                    }
                    break;
                case 'height-transition':
                    if (element.isIntersecting) {
                        element.target.classList.remove('max-h-0')
                        element.target.classList.add('max-h-full')
                    }
                    break;
                default:
            }
        });
    }

    const defineScrollObserver = () => {
        const observer = new IntersectionObserver(intersectionCallback, { rootMargin: '0px' });
        if (headerRef.current && subHeaderRef.current && projectSectionRef.current && jobSectionRef.current && contactSectionRef.current) {
            observer.observe(headerRef.current);
            observer.observe(subHeaderRef.current);
            observer.observe(jobSectionRef.current);
            observer.observe(projectSectionRef.current);
            observer.observe(contactSectionRef.current);
        }
        return () => observer.disconnect();
    }

    const onContact = () => {
        window.open(socialLinks['mail'], '_blank');
    }

    useEffect(() => {
        defineScrollObserver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ConnectBar />
            <div className="h-screen flex items-center justify-center">
                <div
                    ref={headerRef}
                    className="height-transition text-7xl max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in"
                >
                    Hey!
                </div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div
                    ref={subHeaderRef}
                    className="height-transition text-7xl max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in delay-300"
                >
                    <p className="text-7xl">My name is Nithin Rauj.</p>
                    <p className="text-7xl my-7">I build software for a living.</p>
                </div>
            </div>

            <div className="h-screen flex flex-col items-center justify-center overflow-x-hidden my-5">
                <div
                    ref={jobSectionRef}
                    className="height-transition w-1/2 max-h-0 overflow-hidden transition-[max-height] delay-300 duration-500 ease-in"
                >
                    <p className="transition duration-300 text-7xl text-center">
                        Where I&apos;ve Worked...
                    </p><br />
                    {jobData.map((j, index) => <JobCard key={index} data={jobData[index]} />)}
                </div>
            </div>

            <div className="h-screen flex items-center justify-center overflow-x-hidden">
                <div
                    ref={projectSectionRef}
                    className="height-transition w-1/2 max-h-0 overflow-hidden transition-[max-height] delay-300 duration-500 ease-in"
                >
                    <p className="transition duration-300 text-7xl text-center">What I&apos;ve Built...</p><br />
                    {projectData.map((j, index) => <ProjectCard key={index} data={projectData[index]} />)}
                </div>
            </div>

            <div className="h-screen flex items-center justify-center overflow-x-hidden">
                <div
                    ref={contactSectionRef}
                    className="height-transition w-1/2 max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in"
                >
                    <p className="transition duration-300 text-7xl text-center">Contact Me</p><br />
                    <div className="flex flex-col justify-center items-center">
                        <p className='font-extralight'>Get in touch to discuss projects, collaborations, or just to say Hello!</p>
                        <button
                            onClick={onContact}
                            className="border-2 my-5 p-4 rounded-lg hover:scale-110 transition-transform ease-in"
                        >
                            Get In Touch!
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Content