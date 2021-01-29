import { Component } from 'react';

import Searchbar from './component/Searchbar/Searchbar'
import ImageCallery from './component/ImageGallery/ImageCallery'
import Modal from './component/Modal/Modal'




export default class App extends Component{
  state = {
    tagsName: " ",
    showModal: false,
    images:[],
  }
     
   //метод который открывает и закрывает модальное окно
  toogleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      
    }))
  }

  
  //метод который получает проп{tags} от searchbar и записывает в стейт
  hendleFormSubmit = tagsName => {
    console.log(tagsName)
    this.setState({tagsName})
}




    



  
  render() {
    const { showModal } = this.state;
  return(
    <div >
      <Searchbar onSubmit={this.hendleFormSubmit} />
      
      <ImageCallery tagsName={this.state.tagsName} images={this.state.images }/>
          {showModal && <Modal/>}
    </div>
  )};
}

