import { useEffect, useRef } from "react"
import ConnectBar from "./ConnectBar";

const Content = () => {

    const headerRef = useRef();
    const subHeaderRef = useRef();
    const job1Ref = useRef();
    const job2Ref = useRef();

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

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback, { rootMargin: '0px' });
        if (headerRef.current && subHeaderRef.current && job1Ref.current && job2Ref.current) {
            observer.observe(headerRef.current);
            observer.observe(subHeaderRef.current);
            observer.observe(job1Ref.current);
            observer.observe(job2Ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ConnectBar />
            <div className="h-screen flex items-center justify-center">
                <p className="text-7xl">Hey!</p>
            </div>
            <div className="h-screen flex items-center justify-center">
                <p ref={headerRef} className="header transition duration-300 text-7xl">I am Nithin Rauj</p>
            </div>
            <div className="h-screen flex items-center justify-center">
                <p ref={subHeaderRef} className="header transition duration-300 text-7xl">I&apos;m a Software Engineer</p>
            </div>
            <div className="h-screen flex flex-col items-center justify-center overflow-x-hidden">
                <div className="w-1/2">
                    <p className="transition duration-300 text-7xl">Where I&apos;ve Worked...</p><br />

                    <div ref={job1Ref} className="card my-3 -translate-x-[150%] transition duration-700 ease-in">
                        <p className="text-3xl">ActiveCampaign</p>
                        <p className="text-base font-thin">Software Engineer &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Jan 2024 - Present</p>
                        <p className="text-base font-thin">Software Engineering Intern&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;May 2023 - Aug 2023</p>
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

                    <div ref={job2Ref} className="card my-3 translate-x-[150%] transition duration-700 ease-in">
                        <p className="text-3xl">Animaker</p>
                        <p className="text-base font-thin">Software Engineer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;May 2020 – April 2022</p>
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
        </>
    )
}

export default Content