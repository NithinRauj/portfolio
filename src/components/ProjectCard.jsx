/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Icon from "../ui/Icon";
import Badge from "../ui/Badge";
import linkSvg from '../assets/link.svg';

const ProjectCard = forwardRef(function ProjectCard({ data, transitionClass }, ref) {

    const { name, skills, url, desc } = data;

    return (
        <div ref={ref} className={`transform-transition my-5 ${transitionClass} transition duration-700 ease-in`}>
            <div className="flex flex-row">
                <p className="text-3xl">{name}</p>
                <Icon icon={linkSvg} alt={'link-icon'} className={'w-4 h-4 cursor-pointer mx-2'} url={url} />
            </div>
            <div className="text-base flex flex-row my-5">
                {skills.map((s, index) => <Badge key={index} text={s} />)}
            </div>
            <div className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                {desc}
            </div>
        </div>
    )
});

export default ProjectCard