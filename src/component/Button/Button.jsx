import styles from './button.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const button = props => {
    return (
      <div>
        <button type="button" class={styles.button} data-action="load-more">
          <span class="spinner " role="status" aria-hidden="true"></span>
          <span class="label">Load more</span>
        </button>
      </div>
    );
};

button.propTypes = {
    
};

export default button;

