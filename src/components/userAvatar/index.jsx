import React from 'react';
import { Avatar as MAvatar } from '@mui/material';
import PropTypes from 'prop-types';

function stringAvatar(name) {
  const names = name.split(' ');
  let initials = name[0].chartAt(0).toUpperCase();

  if (names.length > 1) {
    initials += names[name.length - 1].charAt(0).toUpperCase();
  }
  return {
    children: initials,
    sx: {
      bgcolor: 'primary.main',
      color: 'white',
      marginBottom: '10px',
      width: '150px',
      height: '150px',
    },
  };
}

function Avatar({ src, name }) {
  if (src) {
    return <MAvatar alt={name} src={src} sx={{ marginBottom: '10px', height: '150px', width: '150px' }} />;
  }
  return <Avatar {...stringAvatar(name)} />;
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
