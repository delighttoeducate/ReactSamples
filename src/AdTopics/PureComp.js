import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Google"
        }
    }

    stateChanger=()=>{
        this.setState({
            name:"Google"
        })
    }
    
    render() {
        console.log(`Pure Comp Rendered ${Math.floor(Math.random(10)*100)}`)
        return (
            <div>
                
                <button onClick={this.stateChanger}>Pure Compo State Change</button>
            </div>
        )
    }
}

export default PureComp
