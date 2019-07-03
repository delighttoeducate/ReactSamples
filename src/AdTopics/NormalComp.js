import React, { Component } from 'react'

class NormalComp extends Component {
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
        console.log(`Normal Comp Rendered ${Math.floor(Math.random(10)*10)}`)
        return (
            <div>
                <button onClick={this.stateChanger}>Normal Compo State Change</button>
            </div>
        )
    }
}

export default NormalComp
