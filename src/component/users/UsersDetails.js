import React from 'react';
import PropTypes from 'prop-types';

const UsersDetails = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
        alt='avatar'
      ></img>
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          className='btn btn-dark btn-sm my-1'
          target='noopener noreferrer _blank'
        >
          More
        </a>
      </div>
    </div>
  );
};

UsersDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersDetails;
