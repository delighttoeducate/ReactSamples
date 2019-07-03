import React from 'react'

function FallbackUI() {
    const headStyle={
        color:"blue"
    }
    return (
        <div>
            <h2 style={headStyle}>Something Went Wrong in the application</h2>
            <p>Sorry for Inconvinicnenf</p>
        </div>
    )
}

export default FallbackUI
