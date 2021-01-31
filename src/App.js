import { Component } from 'react';
import './App.css';
import Searchbar from './component/Searchbar/Searchbar'
import ImageCallery from './component/ImageGallery/ImageCallery'
//import Modal from './component/Modal/Modal'
//import Button from './component/Button/Button'
//import ImageGalleryItem from './component/ImageGalleryItem/ImageGalleryItem'
//import LoaderApp from './component/Loader/loader'


export default class App extends Component{
  state = {
    tagsName: " ",
   // showModal: false,
    images: [],
   largeImageURL: null,
    //page: 0,
  }
     




   //метод который открывает и закрывает модальное окно
/*  largeImageURL = () => {
   // const largeImageURL = e.target.dataset.sourse;
//console.log(`largeImageURL`, largeImageURL)
    this.setState(({showModal}) => ({
      showModal: !showModal
     //this.setState(state => ({ showModal: !state.showModal, largeImageURL })); 
    }))}
  */

  
  //метод который получает проп{tags} от searchbar и записывает в стейт
  hendleFormSubmit = tagsName => {
    console.log(tagsName)
    this.setState({tagsName})
}


  render() {
    //const { showModal } = this.state;
  return(
    <div >
      <Searchbar onSubmit={this.hendleFormSubmit} />
      
      <ImageCallery tagsName={this.state.tagsName}/>



      
      
      {/*<ImageGalleryItem  largeImageURL={this.state.largeImageURL} onClick={this.toogleModal()} />
        this.state.images.map(image => (
            <ImageGalleryItem key={image.id} tags={image.tags} largeImageURL={image.largeImageURL} onClick={this.toogleModal} />
        ))/*/}  
    

     
      {/*showModal && <Modal largeImageURL={this.state.largeImageURL} onClick={this.toogleModal()} />*/}
      


         



    </div>
  )};
}

//onClick={onClick}