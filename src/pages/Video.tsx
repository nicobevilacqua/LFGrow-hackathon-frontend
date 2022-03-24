import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import Video from '@components/Video';

import Button, { Sizes, Types } from '@components/finity/Button';

import { ReactComponent as ActivityRegularOutlined } from '@assets/icons/regular/activity-outlined.svg';
import { ReactComponent as PlusRegularOutlined } from '@assets/icons/regular/plus-outlined.svg';

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
      <p className="uppercase">Videos</p>
      <div className="flex flex-col">
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          type={Types.Primary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          type={Types.Primary}
          className="my-2"
          disabled={true}
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          type={Types.Secondary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          type={Types.Secondary}
          className="my-2"
          disabled={true}
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Large'}
          size={Sizes.Large}
          type={Types.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Medium'}
          size={Sizes.Medium}
          type={Types.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Small'}
          size={Sizes.Small}
          type={Types.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          type={Types.Tertiary}
          className="my-2"
          disabled={true}
        ></Button>
      </div>
    </>
  );
};

export default VideoPage;
