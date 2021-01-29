//import React from "react";
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageCallery extends Component {

  state = {
    images:[],
    loading: false
  }

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '19244879-147a84bd8a529ac8c96d916bd';
        if (prevProps.tagsName !== this.props.tagsName){
        console.log('изменилось имя ');
        console.log("prevProps.tagsName:", prevProps.tagsName);
            console.log('this.props.tagsName:', this.props.tagsName);

          this.setState({loading:true})
          
          fetch(
            `https://pixabay.com/api/?q=${this.props.tagsName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=3`
          )
            .then((response) => response.json())
            //.then(console.log)
            .then(images => this.setState({images: [...images.hits]}))
            .finally(() => this.setState({ loading: false }))
        }
  }
  


   render (){
  return ( 
    <ul className="ImageGallery">
      
        {/* this.state.images.length !== 0 &&  ()*/}
      {this.state.images.map(image  => (
        <ImageGalleryItem key={image.id} tags={image.tags} src={image.webformatURL} />
       ))}
      {/*this.state.images.map(({ id, webformatURL  }) => {
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
       })*/}
      
      {/*<ImageGalleryItem id={this.state.images.id} tags={this.state.images.tags} webformatURL={this.state.images.webformatURL} />*/}
        {this.state.loading && <div>Загружается....</div>}
      </ul>
  )} 

}


//onClick = { onClick };images={images}

//<  p>{this.props.tagsName}</p>
 //       {this.state.images && <div>{this.state.images.hits.tags}</div>}
/*
<p>{this.props.tagsName}</p>
        {this.state.images && <div>{this.state.images.tags}</div>}

        {!this.props.tagsName && <div>Укажите, что ищите</div>}



*/




  /*<ImageGalleryItem id={this.images.id} tags={this.images.tags} webformatURL={this.images.webformatURL} />*/

