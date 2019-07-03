import React, { Component } from 'react'

class EventBind extends Component {
    //snippet
    constructor(props) {
        // call to super
        super(props)
    
        this.state = {
             message:"Hello"
        }

   this.clickHandler=this.clickHandler.bind(this)
    }
    

    // // VVIMP notice --- wheever we are using arrow functions for handling we are not going to use binding
    // clickHandler=()=>{
    //     // /console.log(this.state.message);
    //     this.setState({
    //         message:"Good bye"
    //     })
    // console.log(this);
    // }


    clickHandler(){
        this.setState({
            message: "Good bye"
        })

    console.log(this);
    }

  

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>click to change state by Handler</button>  */}
            {/* <button onClick={()=>this.clickHandler()}>click to change state by Handler</button>   */}
            <button onClick={this.clickHandler}>click to change state by Handler</button>                


            </div>
        )
    }
}

export default EventBind
