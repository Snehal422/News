import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from './Loader';



export default class News extends Component {

  static defaultProps={
    country:'in',
    
    // category:'general',
    apiKey:'416ed7c8a320415cbd34851bb8417e08'

  }

 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      pageSize:0


    };
  }
  
  async componentDidMount(){
    
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();    
    this.setState({articles:parsedData.articles,tottalResults:parsedData.tottalResults, loading:false });

  }

  handlePreviousClick=async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();    
    this.setState({loading:false})
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles
    })

  }
  handleNextClick= async()=>{

    if(!(this.state.page+1>Math.ceil(this.state.tottalResults/3))){

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true}) 
    let data=await fetch(url);
    let parsedData=await data.json();        
    this.setState({loading:false})
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles
    })
  }
  
    
  }

  render() {
    return (
      <div className="container"  >
        <h1 className="text-center"> Top News Here..</h1>
        {this.state.loading&&<Loader/>}
        <div className="row" >
          
            {!this.state.loading&&this.state.articles.map((element) => {
              return (
                <div className="col s12 l4" key={element.url}>
                  <NewsItem
                    title={element.title?element.title:""}
                    description={element.description?element.description:""}
                    imgUrl={element.urlToImage} newsUrl={element.url}
                  />
                </div>
              );
            })}
         
        </div>
        {/* <div className="container" style={{display:"flex", flex:"wrap", justifyContent:"space-between"}}>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.tottalResults/3)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div> */}
      </div>
    );
  }
}

