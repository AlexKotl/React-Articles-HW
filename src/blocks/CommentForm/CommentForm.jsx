import React from 'react';

export default class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">
                <input type="text" placeholder="Your name" /> <br/>
                <textarea placeholder="Enter your comment"/> <br/>
                <button>Add</button>
            </div>
        )
    }
}