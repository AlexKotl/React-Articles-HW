import React from 'react';
import Article from 'blocks/Article/Article.jsx';
import articles_data from "./../../static/data.js";

/**
 * Articles List
 */
class ArticlesList extends React.Component {

    state = {
        indexOpenArticle: null,
        lastCommentId: 1,
        articles: articles_data
    }

    _addComment(item) {
        // some validation
        if (item.comment == '') {
            alert('Please enter comment first.');
            return;
        }

        this.setState(this.state.articles.map(article => {
            if (article.id === this.state.indexOpenArticle) {
                article.comments.push({
                    id: "comment" + this.state.lastCommentId,
                    name: {
                        first: item.name || '',
                        last: ''
                    },
                    text: item.comment || ''
                });

                this.setState({
                    lastCommentId: this.state.lastCommentId + 1
                });
            }

            return article;
        }))
    }

    toggleComments (articleId) {
        var {indexOpenArticle} = this.state;

        if (indexOpenArticle === articleId) {
            indexOpenArticle = null;
        } else {
            indexOpenArticle = articleId;
        }

        this.setState({
            indexOpenArticle: indexOpenArticle
        });
    }

    componentDidMount() {
        window.ee.addListener("Comment.add", ::this._addComment);
    }

    componentWillUnmount() {
        window.ee.removeListener('Comment.add');
    }

    render () {
        var {indexOpenArticle} = this.state;

        return (
            <div className='articles'>
                <div>Articles: {this.state.articles.length}</div>
                {this.state.articles.map(
                    article => <Article
                        key={article.id}
                        article={article}
                        showComments={indexOpenArticle === article.id}
                        toggleComments={this.toggleComments.bind(this, article.id)}
                    />)}
            </div>
        );
    }
}

export default ArticlesList;
