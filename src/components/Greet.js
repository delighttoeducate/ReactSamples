import React, { Component } from 'react';

class Greet extends Component {
    render() { 
        return ( 
          <div>
                {/*props usage in Class component*/}
                <p>Greet Messag ! Hello {this.props.name}</p>
                <hr/>
          </div>
         );
    }
}
 
export default Greet;