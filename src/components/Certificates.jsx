import React from 'react'

const Certificates = props => {
    return (
        <div className="Certificates">
            <div className="Certificates-container">
                {   
                    props.data.map((cert,id)=>(
                        <div className="Certificates-item" key={`Cert-${id}`}>
                            <h3>{cert.name}</h3>
                            <h4>{cert.institution}</h4>
                            <h5><a href={cert.link}> Ver Credencial </a></h5>
                            <p>{cert.description}</p>
                            <p>{cert.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Certificates
