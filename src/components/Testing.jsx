import React from 'react'

const Testing = ({ name, color, shadow }) => {
    return (
        <div className={`py-4 mb-4 ${shadow}`}>
            {name}
        </div>
    )
}

export default Testing