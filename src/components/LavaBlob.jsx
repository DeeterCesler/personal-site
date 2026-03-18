import React from 'react';

const LavaBlob = ({ color, size }) => {
  const blobStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    position: 'absolute',
    animation: 'wobble 4s ease-in-out alternate infinite, blob-one 13s infinite',
  };

  return <div className="blob" style={blobStyle} />;
};

export default LavaBlob;