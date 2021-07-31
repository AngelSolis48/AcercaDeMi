import React from 'react'

const Education = props => {
    return (
        <div className="Education">
            <div className="Education-container">
                {props.data.map((edu, index)=>(
                    <div className="Education-item" key={`Edu-${index}`}>
                        <h3>{edu.institution}</h3>
                        <h4>{edu.school}</h4>
                        <h4>{edu.title}</h4>
                        <p>{edu.description}</p>
                        <p>{edu.dates}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
