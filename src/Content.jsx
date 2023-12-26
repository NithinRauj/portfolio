import { useEffect, useRef } from "react"
import ConnectBar from "./ConnectBar";
import Badge from "./Badge";
import Icon from "./Icon";
import linkSvg from './assets/link.svg';
import Footer from "./Footer";

const Content = () => {

    const PROJECT_URLS = ['https://github.com/NithinRauj/CollabSQL', 'https://github.com/NithinRauj/rest-client-electron'];
    const MAIL_URL = 'mailto: raujnithin@gmail.com'

    const headerRef = useRef();
    const subHeaderRef = useRef();
    const job1Ref = useRef();
    const job2Ref = useRef();
    const project1Ref = useRef();
    const project2Ref = useRef();
    const contactSectionRef = useRef();

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
                        element.target.classList.add('max-h-64')
                    }
                    break;
                default:
            }
        });
    }

    const defineScrollObserver = () => {
        const observer = new IntersectionObserver(intersectionCallback, { rootMargin: '0px' });
        if (headerRef.current && subHeaderRef.current && job1Ref.current && job2Ref.current && project1Ref.current && project2Ref.current && contactSectionRef.current) {
            observer.observe(headerRef.current);
            observer.observe(subHeaderRef.current);
            observer.observe(job1Ref.current);
            observer.observe(job2Ref.current);
            observer.observe(project1Ref.current);
            observer.observe(project2Ref.current);
            observer.observe(contactSectionRef.current);
        }
        return () => observer.disconnect();
    }

    const onContact = () => {
        window.open(MAIL_URL, '_blank');
    }

    useEffect(() => {
        defineScrollObserver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ConnectBar />
            <div className="h-screen flex items-center justify-center">
                <div ref={headerRef} className="height-transition text-7xl max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in">Hey!</div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div ref={subHeaderRef} className="height-transition text-7xl max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in delay-500">
                    <p className="text-7xl">My name is Nithin Rauj.</p>
                    <p className="text-7xl my-7">I build software for a living.</p>
                </div>
            </div>

            <div className="h-screen flex flex-col items-center justify-center overflow-x-hidden my-5">
                <div className="w-1/2">
                    <p className="transition duration-300 text-7xl text-center">Where I&apos;ve Worked...</p><br />
                    <div ref={job1Ref} className="transform-transition -translate-x-[150%] transition duration-700 ease-in my-5">
                        <p className="text-3xl">ActiveCampaign</p>
                        <div className="my-3">
                            <p className="text-base font-thin">Software Engineer &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Jan 2024 - Present</p>
                            <p className="text-base font-thin">Software Engineering Intern&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;May 2023 - Aug 2023</p>
                        </div>
                        <ul className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                            <li>
                                Architected a scalable CI/CD pipeline hosted in GitLab automating and
                                streamlining the deployment process for database DML changes in both
                                staging and production databases.
                            </li>
                            <li>
                                Implemented automated testing and validation procedures, ensuring the
                                correctness and reliability of database changes before deployment, reducing
                                post-deployment issues by 15%.
                            </li>
                            <li>
                                Effectively reduced the database engineering team’s workload to less than 10%
                                when it comes to servicing requests from engineers.
                            </li>
                        </ul>
                    </div>

                    <div ref={job2Ref} className="transform-transition translate-x-[150%] transition duration-700 ease-in my-5">
                        <p className="text-3xl">Animaker</p>
                        <div className="my-3">
                            <p className="text-base font-thin">Software Engineer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;May 2020 – April 2022</p>
                        </div>
                        <ul className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                            <li>Collaborated with a 10 member team to build Vmaker suite of products and
                                grew subscriber count from 0 to 100K in a span of 2 years.
                            </li>
                            <li>Developed a user-friendly interface with customizable settings, allowing users
                                to capture screens and webcam, choose media sources, resolution and many
                                more.
                            </li>
                            <li>
                                Integrated Vmaker with other third-party software such as HubSpot,
                                PartnerStack, Jira, and GitHub.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="h-screen flex items-center justify-center overflow-x-hidden">
                <div className="w-1/2">
                    <p className="transition duration-300 text-7xl text-center">What I&apos;ve Built...</p><br />

                    <div ref={project1Ref} className="transform-transition my-5 -translate-x-[150%] transition duration-700 ease-in">
                        <div className="flex flex-row">
                            <p className="text-3xl">CollabSQL</p>
                            <Icon icon={linkSvg} alt={'link-icon'} className={'w-4 h-4 cursor-pointer mx-2'} url={PROJECT_URLS[0]} />
                        </div>
                        <div className="text-base flex flex-row my-5">
                            <Badge text='React' />
                            <Badge text='TypeScript' />
                            <Badge text='Yjs' />
                            <Badge text='Node' />
                            <Badge text='Express' />
                            <Badge text='Socket.io' />
                        </div>
                        <div className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                            A real-time collaborative editing environment,
                            allowing multiple users to simultaneously edit and execute SQL queries.
                        </div>
                    </div>

                    <div ref={project2Ref} className="transform-transition my-5 translate-x-[150%] transition duration-700 ease-in">
                        <div className="flex flex-row">
                            <p className="text-3xl">REST Client</p>
                            <Icon icon={linkSvg} alt={'link-icon'} className={'w-4 h-4 cursor-pointer mx-2'} url={PROJECT_URLS[1]} />
                        </div>
                        <div className="text-base flex flex-row my-5">
                            <Badge text='React' />
                            <Badge text='TypeScript' />
                            <Badge text='Electron' />
                            <Badge text='Node' />
                        </div>

                        <div className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                            A desktop application that enables users to run, test, and iterate their REST APIs similar to the Postman client.
                        </div>
                    </div>

                </div>
            </div>

            <div className="h-screen flex items-center justify-center overflow-x-hidden">
                <div ref={contactSectionRef} className="height-transition w-1/2 max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in">
                    <p className="transition duration-300 text-7xl text-center">Contact Me</p><br />
                    <div className="flex flex-col justify-center items-center">
                        <p className='font-extralight'>Get in touch to discuss projects, collaborations, or just to say Hello!</p>
                        <button onClick={onContact} className="border-2 my-5 p-4 rounded-lg hover:scale-110 transition-transform ease-in">
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