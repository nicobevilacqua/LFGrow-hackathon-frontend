import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import Video from '@components/Video';
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

  return (
    <>
      <p>Video</p>
      <Video options={options} onReady={handlePlayerReady} />
    </>
  );
};

export default VideoPage;
