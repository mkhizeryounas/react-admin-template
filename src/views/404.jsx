import React from 'react';
import imgNotFound from '../assets/images/404.png';

const NotFound = () => {
  return (
    <div>
      <center>
        <br />
        <br />
        <br />
        <br />
        <img
          src={imgNotFound}
          alt='not found'
          style={{ width: '150px' }}
          srcset=''
        />
        <h1>Page not found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
      </center>
    </div>
  );
};

export default NotFound;
