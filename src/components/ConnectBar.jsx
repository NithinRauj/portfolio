import { useEffect, useRef } from 'react'
import Icon from '../ui/Icon'
import emailSvg from '../assets/email.svg'
import linkedinSvg from '../assets/linkedin.svg'
import githubSvg from '../assets/github.svg'
import { socialLinks } from '../data'

const ConnectBar = () => {

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
            <Icon icon={emailSvg} url={socialLinks['mail']} alt='email-icon' className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
            <Icon icon={linkedinSvg} target='_blank' url={socialLinks['linkedin']} alt="linkedin-icon" className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
            <Icon icon={githubSvg} target='_blank' url={socialLinks['github']} alt="github-icon" className='w-9 h-9 cursor-pointer hover:scale-110 transition-transform ease-in' />
        </div>
    )
}

export default ConnectBar

