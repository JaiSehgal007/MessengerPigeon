import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component {
    constructor(){
        super();
        // console.log("this is a constructor from the news component");
        this.state={
            articles: [],
            loading:false
        }
    };

    // this will run after the render will run
    async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=cricket&from=2023-06-08&to=2023-06-08&sortBy=popularity&apiKey=5d02f44f1aa148b69cd22421eafa9214";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles})
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Pigeon Messanger - Top Headlines</h2>
                {this.state.articles.map((element)=>{})}
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:""} newsurl={element.url?element.url:""} />
                        </div>);
                    })}
                </div>
            </div>
        )
    }
}


export default News;