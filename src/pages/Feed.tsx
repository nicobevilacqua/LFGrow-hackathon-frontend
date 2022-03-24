import Card from '@components/finity/Card';
import React from 'react';

const Feed = () => {
  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center', gap: 20 }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Feed;
