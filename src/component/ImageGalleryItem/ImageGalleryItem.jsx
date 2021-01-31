import React from "react";
import styles from "./imageGalleryItem.module.css";

export default function ImageGalleryItem({
  images,
  onClick /*src, tags, id, onToogleModal, largeImageURL*/,
}) {
  return (
    <>
      {images.map((image) => (
        <li
          className={styles.ImageGalleryItem}
          key={image.id}
          /*key={id}*/
        >
          <img
            onClick={onClick}
            src={image.webformatURL}
            data-sourse={image.largeImageURL}
            alt={image.tags}
            /* src={src}
          alt={tags}
          className={styles.imageGalleryItemImage}
          onClick={onToogleModal}
          data-sourse={largeImageURL}*/
          />
        </li>
      ))}
    </>
  );
}
