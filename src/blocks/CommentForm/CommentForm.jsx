import React from 'react';

export default class CommentForm extends React.Component {

    state: {
        name: '',
        comment: ''
    }

    _handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });

        console.log(this.state);
    }

    _addComment() {
        alert('adding comment');

        window.ee.emit('Comment.add', this.state);
    }

    render() {
        return (
            <div className="commentForm">
                <input name="name" type="text" placeholder="Your name" onChange={::this._handleChange} /> <br/>
                <textarea name="comment" placeholder="Enter your comment" onChange={::this._handleChange}/> <br/>
                <button onClick={::this._addComment}>Add</button>
            </div>
        )
    }
}