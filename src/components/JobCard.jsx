/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const JobCard = forwardRef(function JobCard({ data, transitionClass }, ref) {

    const { name, positions, desc } = data;
    return (
        <div ref={ref} className={`transform-transition ${transitionClass} transition duration-700 ease-in my-5`}>
            <p className="text-3xl">{name}</p>
            <div className="my-3">
                {positions.map((p, index) => {
                    return <p
                        key={index}
                        className="text-base font-thin"
                    >
                        {p.title} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{p.duration}
                    </p>
                })}
            </div>
            <ul className="w-5/6 text-justify font-extralight text-sm list-disc mt-3">
                {desc.map((d, index) => {
                    return <li key={index}>{d}</li>
                })}
            </ul>
        </div>
    )
});

export default JobCard