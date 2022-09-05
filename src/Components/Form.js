
// Form Handling

import React from "react";

class Form extends  React.Component{

    constructor(props){

        super(props)

        this.state={

            username:' ',

            comments:' ',

            topic:'  '
        }
    }

    handleUsernameChange=event=>{
  
         this.setState({

            username: event.target.value
         })

    }

    handleCommentsChange=event=>{

        this.setState({

            comments:event.target.value
        })
    }

    handleTopicChange=event=>{

        this.setState({

             topic:event.target.topic
        })
    }

    handleSubmit=event=>{

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)


        // When page do not refesh
        event.preventDefault()
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            
              <lebel>Username</lebel>
              <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/> 
            </div>

            <div>
         <lebel> Comment </lebel>
         <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>

            
        

            </div>

            <div>
          <lebel>Topics</lebel>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="javascript">Javascript</option>
          </select>

            </div>

            <button type="submit">Submit now</button>
            
            </form>
            
        )
    }
    
}

export default Form