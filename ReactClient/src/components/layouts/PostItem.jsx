import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <h2>{props.content}</h2>
            <h4>{props.user}</h4>
        </div>
    )
}

export default PostItem;