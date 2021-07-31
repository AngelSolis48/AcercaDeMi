import React from 'react'

const Social = props => {
    return (
        <div className="Social">
            <ul>
                {props.social.map( (item,index) => (
                    <li key={`Social-${index}`}>
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social
