import React from 'react'

const Skills = props => {
    return (
        <div className="Skills">
            <div className="Skills-container">
                    {
                        props.data.map( (sk,id) => (
                            <div className="Skills-type" key={`Type-${id}`}>
                                <h3>{sk.type}</h3>
                                {sk.skil.map( (skil,index) => (
                                    <span className="Skills-item" key={`Skill-${index}`}>
                                        <h5>{skil.name}</h5>
                                        <span className="Skills-line">
                                            <span>{skil.percentage}</span>
                                        </span>
                                    </span>
                                ))}
                            </div>
                        ))
                    }
                
            </div>
        </div>
    )
}

export default Skills
