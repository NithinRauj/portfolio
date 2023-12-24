import { useEffect, useRef } from "react"
import ConnectBar from "./ConnectBar";
import Badge from "./Badge";
import Icon from "./Icon";
import linkSvg from './assets/link.svg';

const Content = () => {

    const PROJECT_URLS = ['https://github.com/NithinRauj/CollabSQL', 'https://github.com/NithinRauj/rest-client-electron'];

    const headerRef = useRef();
    const subHeaderRef = useRef();
    const job1Ref = useRef();
    const job2Ref = useRef();
    const project1Ref = useRef();
    const project2Ref = useRef();

    const intersectionCallback = (elements) => {
        elements.forEach((element) => {
            const classList = element.target.classList;
            switch (classList[0]) {
                case 'header':
                case 'subheader':
                    if (element.isIntersecting) {
                        element.target.classList.remove('blur')
                        element.target.classList.add('scale-125')
                    }
                    break;
                case 'card':
                    if (element.isIntersecting) {
                        element.target.classList.remove('-translate-x-[150%]')
                        element.target.classList.remove('translate-x-[150%]')
                    }
                    break;
            }
        });
    }

    const defineScrollObserver = () => {
        const observer = new IntersectionObserver(intersectionCallback, { rootMargin: '0px' });
        if (headerRef.current && subHeaderRef.current && job1Ref.current && job2Ref.current) {
            observer.observe(headerRef.current);
            observer.observe(subHeaderRef.current);
            observer.observe(job1Ref.current);
            observer.observe(job2Ref.current);
            observer.observe(project1Ref.current);
            observer.observe(project2Ref.current);
        }
        return () => observer.disconnect();
    }

    useEffect(() => {
        defineScrollObserver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ConnectBar />
            <div className="h-screen flex items-center justify-center">
                <div className="text-7xl">Hey!</div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <p ref={headerRef} className="header transition duration-300 text-7xl">I am Nithin Rauj</p>
            </div>
            <div className="h-screen flex items-center justify-center">
                <p ref={subHeaderRef} className="header transition duration-300 text-7xl">I&apos;m a Software Engineer</p>
            </div>

            <div className="h-screen flex flex-col items-center justify-center overflow-x-hidden my-5">
                <div className="w-1/2">
                    <p className="transition duration-300 text-7xl text-center">Where I&apos;ve Worked...</p><br />
                    <div ref={job1Ref} className="card -translate-x-[150%] transition duration-700 ease-in my-5">
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

                    <div ref={job2Ref} className="card translate-x-[150%] transition duration-700 ease-in my-5">
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

                    <div ref={project1Ref} className="card my-5 -translate-x-[150%] transition duration-700 ease-in">
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

                    <div ref={project2Ref} className="card my-5 translate-x-[150%] transition duration-700 ease-in">
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
        </>
    )
}

export default Content