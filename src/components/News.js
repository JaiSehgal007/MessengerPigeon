import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


class News extends React.Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        // console.log("this is a constructor from the news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalize(this.props.category)} - PigeonMessenger`;
    };

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
    }

    // this will run after the render will run
    async componentDidMount() {
        // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=5d02f44f1aa148b69cd22421eafa9214&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults, loading:false})
        this.updateNews();
    }

    // handleNextClick = async () => {
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=5d02f44f1aa148b69cd22421eafa9214&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data=await fetch(url);
    //     // let parsedData=await data.json();
    //     // this.setState({
    //     //     page: this.state.page + 1,
    //     //     articles: parsedData.articles,
    //     //     loading:false,
    //     // })
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }
    // handlePrevClick = async () => {
    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=5d02f44f1aa148b69cd22421eafa9214&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({loading:true});
    //     //     let data=await fetch(url);
    //     //     let parsedData=await data.json();

    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading:false,
    //     // })
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '40px' }}>Pigeon Messenger - Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.description.slice(0, 88) : ""}
                                            imageurl={element.urlToImage ? element.urlToImage : ""}
                                            newsurl={element.url ? element.url : ""}
                                            author={element.author ? element.author : "anonymous"}
                                            date={element.publishedAt ? element.publishedAt : "unknown"}
                                            source={element.source.name ? element.source.name : "unknown"}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>``
                </InfiniteScroll>
            </>
        )
    }
}


export default News;