import React, { Component,PureComponent } from 'react'
import RegularComp from './RegularComp';
import PurceComponent from './PurceComponent';
import MemoComp from './MemoComp';

class RegParentComp extends Component {
// class RegParentComp extends PureComponent {

    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ganesh'
        }
        console.log(this);
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Ganesh'
            })
        },2000)
        
    }

    render() {
        console.log("*********Regular Parent Component Render********");
        return (
            <div>
                Regular Parent Component      
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/>
                <PurceComponent name={this.state.name}/>           */}
            </div>
        )
    }
}

export default RegParentComp
