import React from 'react';
import Article from 'blocks/Article/Article.jsx';
import articles_data from "./../../static/data.js";

/**
 * Articles List
 */
class ArticlesList extends React.Component {



    state = {
        indexOpenArticle: null,
        articles: articles_data
    }

    _addComment(item) {

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
