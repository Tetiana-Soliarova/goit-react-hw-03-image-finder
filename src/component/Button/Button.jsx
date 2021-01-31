import styles from './button.module.css';
//import LoaderApp from '../Loader/loader'
//import React from 'react';
//import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button
      type="button"
      class={styles.button}
      data-action="load-more"
      onClick={onClick}
    >
      
     
      <span class="spinner " role="status" aria-hidden="true"></span>
      <span class="label"> Load more</span>
    </button>
  );
};



