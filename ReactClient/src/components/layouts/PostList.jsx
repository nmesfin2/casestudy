
import React, { Component } from 'react'
import PostItem from './PostItem'

const posts = [
  {
    "user": "natty",
    "content" : "content natty" 
  },
  {
    "user": "natty two",
    "content" : "content natty 2" 
  }
]

export default class PostList extends Component {

 
  render() {
    return (
      <div>
          <ul>
       
            {this.props.posts.map(p=>{
                return (
                   <li>
                        <PostItem {...p}></PostItem>
                   </li> 
                )
            })}
        </ul>
      </div>
    )
  }
}