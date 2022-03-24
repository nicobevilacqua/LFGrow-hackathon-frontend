import React, { ReactElement } from 'react';

export enum Types {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum States {
  Resting = 'resting',
  Hover = 'hover',
  Focused = 'focused',
  Disabled = 'disabled',
}

type Props = {
  type?: Types;
  size?: Sizes;
  state?: States;
  leftIcon?: ReactElement;
  centerIcon?: ReactElement;
  rightIcon?: ReactElement;
  text?: string;
  className: string;
  disabled?: boolean;
};

const SizeClasses = {
  [Sizes.Large]: 'text-lg',
  [Sizes.Medium]: 'text-md',
  [Sizes.Small]: 'text-sm',
};

const TypeClasses = {
  [Types.Primary]: `
    bg-finity-primary-500 
    hover:bg-finity-primary-400
    focus:bg-finity-primary-500
    text-white
    stroke-white
    disabled:bg-finity-light-grey-400
    disabled:stroke-finity-light-grey-800
    disabled:text-finity-light-grey-800
  `,
  [Types.Secondary]: `
    bg-white
    border-2
    border-finity-primary-400
    text-finity-primary-500
    stroke-finity-primary-500
    hover:bg-finity-primary-400
    focus:bg-finity-primary-500
    stroke-white
    hover:bg-finity-primary-100
    hover:stroke-finity-primary-500
    hover:text-finity-primary-500
    hover:border-finity-primary-400
    hover:shadow-sm
    hover:shadow-finity-primary-900
    disabled:shadow-inherit
    disabled:bg-finity-light-grey-400
    disabled:stroke-finity-light-grey-800
    disabled:text-finity-light-grey-800
    disabled:border-finity-light-grey-400
  `,
  [Types.Tertiary]: `
    bg-white
    border-2
    border-finity-light-grey-400
    text-finity-dark-grey-600
    stroke-finity-dark-grey-600
    hover:bg-finity-light-grey-100
    hover:border-finity-light-grey-400
    hover:shadow-sm
    hover:shadow-finity-primary-500
    focus:bg-finity-primary-500
    disabled:bg-finity-light-grey-400
    disabled:shadow-inherit
    disabled:stroke-finity-light-grey-800
    disabled:text-finity-light-grey-800
  `,
};

const StatesClasses = {
  [States.Resting]: {
    button: 'bg-finity-primary-500',
    content: 'text-white stroke-white',
  },
  [States.Hover]: {
    button: 'bg-finity-primary-400',
    content: 'text-white stroke-white',
  },
  [States.Focused]: {
    button: 'bg-finity-primary-500',
    content: 'text-white stroke-white',
  },
  [States.Disabled]: {
    button: 'bg-finity-light-grey-500',
    content: 'text-finity-light-grey-600 stroke-finity-light-grey-600',
  },
};
const Button: React.FC<Props> = (props) => {
  const {
    type = Types.Primary,
    size = Sizes.Large,
    leftIcon,
    centerIcon,
    rightIcon,
    text,
    className,
    disabled = false,
  } = props;

  const [cLeftIcon, cCenterIcon, cRightIcon] = [leftIcon, centerIcon, rightIcon].map((icon) => {
    if (!icon) {
      return;
    }
    return React.cloneElement(icon, {
      className: `mx-2 ${SizeClasses[size]}`,
      width: '1em',
      height: '1em',
    });
  });

  return (
    <button
      type="button"
      disabled={disabled}
      className={`pointer flex flex-row align-center justify-between items-center px-5 py-2 rounded ${TypeClasses[type]} ${className}`}
    >
      {cLeftIcon}
      {cCenterIcon}
      {text ? <span className={`${SizeClasses[size]}`}>{text}</span> : ''}
      {cRightIcon}
    </button>
  );
};

export default Button;
