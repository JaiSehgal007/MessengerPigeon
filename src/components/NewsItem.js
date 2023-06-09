import React from 'react';

class NewsItem extends React.Component {

    render() {
        let {title,description,imageurl,newsurl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl?imageurl:"https://cdn.mos.cms.futurecdn.net/kpv9NQzMQGZbzKynNrD5cE-1200-80.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}


export default NewsItem;