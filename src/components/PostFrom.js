import React, { Component } from "react";
import axios from 'axios'

class PostFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })

  }


  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              placeholder="userid"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="title"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={this.body}
              placeholder="body"
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostFrom;
