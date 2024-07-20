import React, { useRef, useState, useEffect } from 'react';
import FrameCard from './FrameCard';
import { MdFolderZip } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const Bio1 = () => {
    return (
        <>
            <div className='flex px-4 py-3 flex-col gap-1 font-semibold text-slate-100'>
                <span className='flex gap-x-2'>
                    <p className='text-slate-400/70'>1</p>
                    <p>Nice to meet you! I'm Arshad, a <span className='text-bl'>Full-Stack Developer</span>.</p>
                </span>
                <span className='flex gap-x-2'>
                    <p className='text-slate-400/70'>2</p>
                    <p>I'm passionate about creating  <span className='text-[#9BA2F9]'> user-friendly frontend</span>  and <span className='text-[#D1F891]'>reliable backends</span>, ensuring that every web application I build is both <span className='text-[#FFE18F]'>intuitive</span> and <span className='text-[#9BA2F9]'>robust</span>. My focus is on making <span className='text-bl'>web applications</span> that are easy to use and work flawlessly.</p>

                </span>
                <span className='flex gap-x-2'>
                    <p className='text-slate-400/70'>3</p>
                    <p>I follow the latest trends in <span className='text-[#9BA2F9]'>frontend technologies</span>  and libraries, aiming to design and build more accessible applications.</p>

                </span>
                <span className='flex gap-x-2'>
                    <p className='text-slate-400/70'>4</p>
                    <p>My expertise extends to <span className='text-[#D1F891]'> cybersecurity</span>, where I regularly follow the latest trends and work as a freelance <span className='text-bl'>bug hunter</span>. This dedication helps me secure my projects more effectively, as I adhere to <span className='text-[#FFE18F]'>OWASP security guidelines</span>.</p>

                </span>
                <span className='flex gap-x-2'>
                    <p className='text-slate-400/70'>5</p>
                    <p>For me, coding is more than just a job—it's a way to <span className='text-[#9BA2F9]'>understand how things work</span>. I believe that without comprehension, code is merely a collection of words. I enjoy experimenting with new technologies and maintaining personal projects, always striving to make my applications more <span className='text-[#9BA2F9]'>secure </span> and <span className='text-[#9BA2F9]'>scalable</span>.</p>
                </span>

            </div>
        </>
    );
};

export const Bio2 = () => {
    const skills = [
        "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "React.js",
        "Express.js", "Redux", "Socket.IO", "Bootstrap", "Tailwind CSS",
        "MongoDB", "MYSQL", "MSSQL", "Git", "Docker", "CI/CD pipelines",
        "AWS", "Nginx", "MVC Architecture", "Repository Pattern",
        "Clean Architecture", "Figma", "Photoshop", "After Effect",
        "Bodymovin", "Adobe InDesign"
    ];
    return (
        <>
            <div className="container  w-full h-full bg-[#222222]/50 font-mono text-sm text-gray-300 rounded ">
                <div className="terminal_body px-2 bg-black bg-opacity-60 h-full pt-1 mt-0.5 text-md rounded-b flex flex-col">
                    <div className="terminal_prompt flex items-center p-1">
                        <span className="terminal_user text-[#22fd18]">arshad@dev:</span>
                        <span className="terminal_location text-[#419eff] ml-1">~</span>
                        <span className="terminal_bling text-gray-300 ml-1">$</span>
                        <span className="terminal_cursor block mx-2 " >cd /skills</span>
                    </div>
                    <div className="terminal_prompt flex items-center p-1">
                        <span className="terminal_user text-[#22fd18]">arshad@dev:</span>
                        <span className="terminal_location text-[#419eff] ml-1">~</span>
                        <span className="terminal_cursor block  text-[#419eff] " >/skills</span>
                        <span className="terminal_bling text-gray-300 ml-1">$</span>
                        <span className="terminal_cursor block mx-2 " >ls</span>
                    </div>
                    <div className="terminal_output p-1 flex-grow overflow-y-auto">
                        {/* <pre className="output_text m-0">ls</pre> */}


                        <div className="flex flex-wrap 0 text-white font-fcode">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center md:w-1/3 w-6/9 p-1">
                                    <span className="text-[#D1F891] mr-2"><MdFolderZip /></span>
                                    <span className="text-white font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>






                    </div>
                    <div className="terminal_prompt flex items-center p-1">
                        <span className="terminal_user text-[#22fd18]">arshad@dev:</span>
                        <span className="terminal_location text-[#419eff] ml-1">~</span>
                        <span className="terminal_cursor block  text-[#419eff]" >/skills</span>
                        <span className="terminal_bling text-gray-300 ml-1">$</span>
                        <span className="terminal_cursor block h-3 w-1 ml-2 animate-blink" />
                    </div>
                </div>
            </div>

        </>
    );
};

export const Bio3 = () => {
    return (
        <>
            <p>1. Nice to meet you! I'm Arshad, a Full-Stack Developer3.</p>
        </>
    );
};
export const Bio4 = () => {
    //social media links
    return (
        <>
            <div className='flex flex-col p-5 gap-3 '>
                <span className='flex gap-2 cursor-pointer text-slate-200 hover:text-bl transition duration-200 ease-in'><FaGithub size={21} /><p className='font-semibold '>Github</p></span>
                <span className='flex gap-2 cursor-pointer text-slate-200 hover:text-bl transition duration-200 ease-in'><FaLinkedin size={21} /><p className='font-semibold'>Linkedin</p></span>
                <span className='flex gap-2 cursor-pointer text-slate-200 hover:text-bl transition duration-200 ease-in'><SiLeetcode size={21} /><p className='font-semibold '>Leetcode</p></span>
            </div>
        </>
    );
};

function DragComponent() {
    const parentRef = useRef(null);
    const [parentDimensions, setParentDimensions] = useState({ width: 0, height: 0 });
    const [zIndices, setZIndices] = useState({});
    const [maxZIndex, setMaxZIndex] = useState(1);

    const getInitialPositions = () => {
        if (window.innerWidth < 768) { // Mobile view
            return [
                { id: 1, initialPosition: { x: 0, y: 10 }, title: "about-me", data: Bio1 },
                { id: 2, initialPosition: { x: 0, y: 940 }, title: "skills", data: Bio2 },
                { id: 3, initialPosition: { x: 0, y: 1570 }, title: "portrait", data: Bio3 },
                { id: 4, initialPosition: { x: 50, y: 1390 }, title: "me—online", data: Bio4 },
            ];
        } else { // Desktop view
            return [
                { id: 1, initialPosition: { x: 50, y: 50 }, title: "about-me", data: Bio1 },
                { id: 2, initialPosition: { x: 700, y: 350 }, title: "skills", data: Bio2 },
                { id: 3, initialPosition: { x: 140, y: 550 }, title: "portrait", data: Bio3 },
                { id: 4, initialPosition: { x: 880, y: 150 }, title: "me—online", data: Bio4 },
            ];
        }
    };

    const [childCards, setChildCards] = useState(getInitialPositions());

    useEffect(() => {
        const updateDimensions = () => {
            if (parentRef.current) {
                setParentDimensions({
                    width: parentRef.current.offsetWidth,
                    height: parentRef.current.offsetHeight+300,
                });
            }

            // Update initial positions based on new screen size
            setChildCards(getInitialPositions());
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Initialize z-indices
        const initialZIndices = {};
        childCards.forEach((card, index) => {
            initialZIndices[card.id] = index + 1;
        });
        setZIndices(initialZIndices);
        setMaxZIndex(childCards.length);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const handleDragStart = (id) => {
        setZIndices((prev) => {
            const newZIndices = { ...prev };
            newZIndices[id] = maxZIndex + 1;
            return newZIndices;
        });
        setMaxZIndex((prev) => prev + 1);
    };



    return (
        <div ref={parentRef} className="w-full h-full relative ">
            {childCards.map((card) => (
                <FrameCard
                    key={card.id}
                    initialPosition={card.initialPosition}
                    parentWidth={parentDimensions.width}
                    parentHeight={parentDimensions.height}
                    zIndex={zIndices[card.id]}
                    onDragStart={() => handleDragStart(card.id)}
                    Data={card.data}
                    title={card.title}
                />
            ))}
        </div>
    );
}

export default DragComponent;
