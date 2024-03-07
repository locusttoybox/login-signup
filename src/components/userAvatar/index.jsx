import React from 'react';
import { Avatar as MAvatar } from '@mui/material';
import PropTypes from 'prop-types';

function Avatar({ src, name }) {
  if (src) {
    return <MAvatar alt={name} src={src} />;
  }
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
