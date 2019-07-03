import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // Ref -- > Not mandatory in constructor .. common way
        this.inputRef= React.createRef() 

        // callback ref example
        this.cbRef=null
        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }
    
    // componentdidmount lifecycle hook
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // call back ref method

        if(this.cbRef)
        {
            this.cbRef.focus()
        }
    }


    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div> 
            <input type="text"  ref={this.inputRef} placeholder="Please enter the first name"/> 
            <input type="text"  ref={this.setCbRef} placeholder="Please enter the last name"/> 
            <button onClick={this.clickHandler}>Click</button>               

            </div>
        )
    }
}

export default RefsDemo
