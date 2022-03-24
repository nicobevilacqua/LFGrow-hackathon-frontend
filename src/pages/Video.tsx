import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import Video from '@components/Video';
import Comment from '@components/Comment';
import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

const VideoPage = () => {
  const { cid } = useParams();

  const playerRef = useRef<VideoJsPlayer | null>(null);

  const src = `https://ipfs.livepeer.com/ipfs/${cid}`;

  const options: VideoJsPlayerOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  const video = {
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    score: 4.5,
    created: new Date(),
    votes: 10000,
    views: 99999,
    comments: [
      {
        streamId: 'sadad',
        created: new Date(),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 99,
        user: 'PeronPeron',
      },
      {
        streamId: 'sadad2',
        created: new Date(),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 99,
        user: 'PeronPeron',
      },
      {
        streamId: 'sadad3',
        created: new Date(),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 99,
        user: 'PeronPeron',
      },
    ],
  };

  return (
    <div className="container border-2 p-5">
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <Video options={options} onReady={handlePlayerReady} />
      <div className="flex">
        <div className="">stars</div>
        <div>
          <button>like</button>
        </div>
      </div>
      <div>
        {video.comments.map((comment) => (
          <Comment {...comment} key={comment.streamId} />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
