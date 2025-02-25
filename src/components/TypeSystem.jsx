import React from 'react'

export const Hero = (props) => (
    <div>
        <div className=''>
            <h1 className='text-display-large font-mono'>{props.heading}</h1>
            <h2 className='text-headline-large font-mono mt-0'>{props.subHeading}</h2>
        </div>
        <p className='text-title-large font-primary mt-6'>{props.paragraph}</p>
    </div>
);