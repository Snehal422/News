import React, { Component } from "react";
import Image from './Images.jpeg'

export default class NewsItem extends Component {

    

  render() {
    let {title,description, imgUrl,newsUrl}=this.props;

    return (
      <div className="m-5 p-1 row">
        <div className="card s12 m3 l6" style={{height: '15 rsm'}}>
          <img src={imgUrl?imgUrl:Image}  height={150} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ whiteSpace: 'nowrap',  overflow: 'hidden', textOverflow: 'ellipsis',maxWidth: '75ch'}}> {title}</h5>
            <p className="card-text" style={{height:'100px', whiteSpace: 'pretty',  overflow: 'hidden', textOverflow: 'ellipsis',maxWidth: '500ch'}}>
             {description}
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
