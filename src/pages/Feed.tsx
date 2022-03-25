import Card from '@components/finity/Card';
import SectionTab from '@components/finity/SectionTab';
import React from 'react';

const cardData = {
  title: 'Lens Protocol',
  subtitle: 'By Snoop Dogg',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.',
  thumbnail: 'https://i.ytimg.com/vi/LG9uYoxFxtw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8WO6VLLV613E1diHNpyLfuDLRWw',
  avatar: 'https://pbs.twimg.com/profile_images/1505032322717941761/EaFzE2yN_400x400.jpg',
  cid: 'QmXavKrZujmkFm4PHJ1fnEUWHoH5Uq5QfXFQEBeXhFeGkE',
};

const cards = Array(6).fill(cardData);

const Feed = () => {
  return (
    <>
      <div>
        <SectionTab />
        <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center', gap: 20 }}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
