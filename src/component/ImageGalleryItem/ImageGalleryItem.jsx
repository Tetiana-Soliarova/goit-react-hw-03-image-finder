import React from "react";
import styles from "./imageGalleryItem.module.css";

export default function ImageGalleryItem({ id, webformatURL, tags }) {
  //const { id, webformatURL } = images;
  return (
    <>
      <li className="ImageGalleryItem" key={id}>
        <img
          //width="100px"
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItemImage"
        />
      </li>
    </>
  );
}
    
//{images.map((image) => {} )}
//if (images.length !== 0){}

































   /*import React from 'react';
import PropTypes from 'prop-types';
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ description , url}) => {
  return (
    
      
      
        <li className={styles.ImageGalleryItem}>
          <img
            src={url}
            alt={description}
            className={styles.ImageGalleryItemImage}
          />
        </li>
      
    
  );
};

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
};
    


export default ImageGalleryItem;


/*
export default function ImageGalleryItem  ({/*src, alt, id*/ /*images})  {
    return (
    <>
        { images.map(image => (
                < li className={styles.ImageGalleryItem} key={image.id} >
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItemImage}
        />
            </li>))}
    </>
    );
};
*/