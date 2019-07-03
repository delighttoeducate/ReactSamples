import React, { PureComponent } from 'react'

class PurceComponent extends PureComponent {
    render() {
        console.log("*****Pure Component Render********")
        return (
            <div>
                PureComponent - {this.props.name}                
            </div>
        )
    }
}

export default PurceComponent
