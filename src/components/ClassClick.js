import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(){
        super()
        this.state={
            message: 'Gani'
        }
    
    // binding this to classClickHandler
    this.classClickHnadler=this.classClickHnadler.bind(this)

    }

    classClickHnadler(){
        console.log("Class - Clicked the button")
        console.log(this)
        this.setState({
            message:"Hello Gani"
        },()=>{
            console.log(this.state.message);
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.classClickHnadler}>Class click Handler</button>                
            </div>
        )
    }
    
}

export default ClassClick
