import React, { Component } from 'react'
import FallbackUI from './FallbackUI';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             errorLogged:false
        }
    }
    
    static getDerivedStateFromError(error)
    {
        return {errorLogged:true}
    }
    render() {
        if(this.state.errorLogged)
        {
            return <FallbackUI/>
        }
        return this.props.children
    

        
    }
}

export default ErrorBoundry
