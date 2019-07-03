import React, { Component } from 'react'
import '../Stylesheet.css'

class StyleSheet extends Component {
    render() {
        let className = this.props.primary ? 'primary':''
        return (
            <div>
               {/* <h1 className={className}>StyleSheet Component</h1>  */}
               <h1 className={`${className} font-decoration font-xl`}>StyleSheet Component</h1> 
            </div>
        )
    }
}

export default StyleSheet
