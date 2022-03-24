import React from 'react';

import Button, { Sizes, StyleTypes } from '@components/finity/Button';

import { ReactComponent as ActivityRegularOutlined } from '@assets/icons/regular/activity-outlined.svg';
import { ReactComponent as PlusRegularOutlined } from '@assets/icons/regular/plus-outlined.svg';

const DesignSystem = () => {
  return (
    <div className="w-30 flex flex-col justify-center">
      <h1 className="">Design System</h1>
      <div className="flex flex-col">
        <h3>Buttons</h3>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          styleType={StyleTypes.Primary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          styleType={StyleTypes.Primary}
          className="my-2"
          disabled={true}
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          styleType={StyleTypes.Secondary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          styleType={StyleTypes.Secondary}
          className="my-2"
          disabled={true}
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Large'}
          size={Sizes.Large}
          styleType={StyleTypes.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Medium'}
          size={Sizes.Medium}
          styleType={StyleTypes.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet Small'}
          size={Sizes.Small}
          styleType={StyleTypes.Tertiary}
          className="my-2"
        ></Button>
        <Button
          leftIcon={<ActivityRegularOutlined />}
          rightIcon={<PlusRegularOutlined />}
          text={'Connect to Wallet'}
          styleType={StyleTypes.Tertiary}
          className="my-2"
          disabled={true}
        ></Button>
      </div>
    </div>
  );
};

export default DesignSystem;
