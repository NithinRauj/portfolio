/* eslint-disable react/prop-types */
const Icon = ({ icon, alt, className, url }) => {
    return <a href={url} target='_blank' rel='noreferrer'>
        <img src={icon} alt={alt} className={className} />
    </a>
}

export default Icon
