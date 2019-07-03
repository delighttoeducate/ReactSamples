import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    

        this.state = {
             
            username:'',
            comments:'',
            topic:'react'
        }
    }
  
    onUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        },()=>{
            console.log(this.state.username)
        })
    }

    handleCommentsChange=event=>{
        this.setState({
            comments:event.target.value
        },()=>{
            console.log(this.state.comments)
        })
    }

    handleTopicChange=event=>{
        this.setState({
            topic:event.target.value
        },()=>{
            console.log(this.state.topic)
        })
    }

    handleSubmitChange=event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render() {
        // Destructing state in class Components
        const {username,comments,topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmitChange}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.onUsernameChange} />
                </div>
                
                <div>
                    <label>Comments</label>

                    <textarea type='textarea' value={comments} onChange={this.handleCommentsChange} />
                
                </div>
                
                  <div>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value='angular'>Angular</option>
                            <option value='react'>React</option>
                            <option value='vue'>Vue</option>
                        </select>
                  </div>
            <button type='submit'>Submit</button>
            </form>
            </div>

        )
    }
}

export default Form

