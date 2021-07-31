import React from 'react'

const Siderbar = ( {children} ) => {
    return (
        <div className="Siderbar">
            <div className="Siderbar-container">
                {children}
            </div>
        </div>
    )
}

export default Siderbar
