import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div id='errorPage'>
      <div className='content'>
        <h2 className='header' data-text='404'>
          404
        </h2>
        <h4 data-text='Opps! Page not found'>Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to='/'>
          <button className='btn'> return home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;