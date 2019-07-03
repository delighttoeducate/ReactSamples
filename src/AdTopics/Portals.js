import React, { Component } from 'react'
import ReactDOM from 'react-dom'

 class Portals extends Component {
    render() {
        return ReactDOM.createPortal(
            
                <h2>Portals Demo</h2>
          ,document.getElementById("bannu")
        )
    }
}

export default Portals
