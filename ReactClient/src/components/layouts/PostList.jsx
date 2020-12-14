
import React, { Component } from 'react'
import PostItem from './PostItem'

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