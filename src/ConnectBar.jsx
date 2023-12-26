import { useEffect, useRef } from 'react'
import emailSvg from './assets/email.svg'
import linkedinSvg from './assets/linkedin.svg'
import githubSvg from './assets/github.svg'
import Icon from './Icon'
const ConnectBar = () => {

    const MAIL_URL = 'mailto: raujnithin@gmail.com'
    const GITHUB_URL = 'https://github.com/NithinRauj';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/nithinrauj1712/';

    const barRef = useRef();

    useEffect(() => {
        if (barRef.current) {
            barRef.current.classList.remove('-translate-x-[160%]');
        }
    }, []);

    return (
        <div ref={barRef}
            className='fixed left-5 bottom-9 flex flex-col 
            justify-between h-36 -translate-x-[160%]
            transition-transform duration-300 ease-in delay-1000'
        >
            <Icon icon={emailSvg} url={MAIL_URL} alt='email-icon' className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
            <Icon icon={linkedinSvg} target='_blank' url={LINKEDIN_URL} alt="linkedin-icon" className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
            <Icon icon={githubSvg} target='_blank' url={GITHUB_URL} alt="github-icon" className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
        </div>
    )
}

export default ConnectBar

