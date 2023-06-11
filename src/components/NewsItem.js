import React from 'react';

class NewsItem extends React.Component {

    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3' >
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className="badge rounded-pill bg-danger" >
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={imageurl ? imageurl : "https://cdn.mos.cms.futurecdn.net/kpv9NQzMQGZbzKynNrD5cE-1200-80.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem;