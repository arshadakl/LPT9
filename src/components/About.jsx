import React from 'react'
import FrameCard from './FrameCard'
import DraggableWithInertia from './Test'
import DragComponent from './DragComponent'

function About() {
    return (
        <>
        <div className='h-full w-full'>
        {/* <FrameCard/> */}
        <DragComponent/>
        {/* <DraggableWithInertia/> */}
        </div>
        </>
    )
}

export default About
