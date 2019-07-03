import React from 'react'

class ConditionalRendering extends React.Component{

    constructor(){
        super()
        this.state={
            isLoggedin:true,
            name:"Ganesh"
        }
    }
    
    render(){
        
     /*   if(this.state.isLoggedin)
        {
            return <div>Hello {this.state.name}</div>
        }
        else{
            return <div>Hello User</div>
        }
    */

    let RenderComp;
    // const logeedIn=this.state.isLoggedin
    // if(logeedIn){
    //     RenderComp=<div>Hello {this.state.name}</div>}
    // else{
    //     RenderComp=<div>Hello User</div>}
    
    return(
        <div>
       {RenderComp}
        {this.state.isLoggedin && <div>Hello {this.state.name}</div>}
        </div>
    )
    }
}

export default ConditionalRendering