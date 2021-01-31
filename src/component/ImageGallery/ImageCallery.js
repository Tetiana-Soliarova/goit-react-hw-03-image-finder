import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from '../Button/Button';
import LoaderApp from '../Loader/loader'
import Modal from '../Modal/Modal'



export default class ImageCallery extends Component {

  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    largeImageURL: null,


    showModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
  
    if (prevProps.tagsName !== this.props.tagsName) {
      console.log('изменилось имя ');
       console.log("prevProps.tagsName:", prevProps.tagsName);
          console.log('this.props.tagsName:', this.props.tagsName);
      this.setState({ loading: true, images: [] })
      this.fetchImagesApi ()
    }
  }    
    
    fetchImagesApi = () => {//-  
      const API_KEY = '19244879-147a84bd8a529ac8c96d916bd';
      
      fetch(
        `https://pixabay.com/api/?q=${this.props.tagsName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`Картинки с даным названием ${this.state.tagsName}не найдено`))
        }) 
        .then(images => this.setState({ images: [ ...images.hits], page:this.state.page + 1 }))//-
        //.then(images => this.setState({ images: [...images.hits] }))images: [...images.hits]
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }))
      //- }
    }
  
  fetchImages = () => {//-
      //-  fetchApi = query => {  this.props.tagsName = this.state.searchQuery;
      //-searchQuery, page = this.prop
      const API_KEY = '19244879-147a84bd8a529ac8c96d916bd';
      
      fetch(
        `https://pixabay.com/api/?q=${this.props.tagsName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`Картинки с даным названием ${this.state.tagsName}не найдено`))
        })
          
        .then(images => this.setState(prevState => ({ images: [ ...prevState.images, ...images.hits], page: prevState.page + 1 })))//-
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }))
      //- }
    }

    hendleImputSumvit = e => {
      e.preventDefault();
      console.log(this.state.tagsName)
    }
//------------------MODAL---------------------
  
  toggleModalCloseOpen = e => {
    const largeImageURL = e.target.dataset.sourse;
    this.setState(state => ({ showModal: !state.showModal, largeImageURL }));
  };



  
  
  render() {
    const { error, images, loading } = this.state;
    return (
        
      <div>
        <ul>

          {error && <h1>{error.message}</h1>}

          <ImageGalleryItem images={this.state.images } onClick={this.toggleModalCloseOpen } />

          {/*images.map(image => (
            <ImageGalleryItem
              key={image.id}
              tags={image.tags}
              src={image.webformatURL}
              onToogleModal={this.toogleModalOpen} />
          ))*/}

          {loading && <LoaderApp />}
          
          

          

      
         

         
          
        </ul>
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}

         {this.state.showModal && <Modal onClose={this.toggleModalCloseOpen}  largeImageURL={this.state.largeImageURL}> </Modal>}
              
          
      </div>
    )
    }

  
}

//onClick = { onClick };images={images}

