import React from 'react';

class Comment extends React.Component {

    render() {
        const comment = this.props;
        
        return (
            <div className='comment'>
                <div><b>{`${comment.name.first} ${comment.name.last}`}</b></div>
                <p>{comment.text}</p>
            </div>
        );
    }

}

export default Comment;