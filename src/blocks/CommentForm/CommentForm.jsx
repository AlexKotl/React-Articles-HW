import React from 'react';

export default class CommentForm extends React.Component {

    state: {
        name: "",
        comment: ""
    }

    _handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
        
    }

    _addComment() {
        window.ee.emit('Comment.add', this.state);
        console.log('triggered event Comment.add sending', this.state );
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