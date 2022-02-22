import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps) => (
  <svg viewBox="0 0 140 140" width="100%" height="100%" className={className}>
    <path
      fill="currentColor"
      d="M1.6,81.8C1.6,69,11,57.9,23.1,57.9c8,0,13.9,5.4,13.9,12.8c0,12.1-11,18.2-22.3,18.2c-1.1,0-2.5,0-3.4-0.1
	c2.3,6.2,8.9,9.8,16.8,9.8c11.6,0,18.2-7.6,21.2-14.9c0.2-0.5,0.4-0.7,0.8-0.7c0.8,0,4.9,2,4.9,2.9c0,0.3-0.1,0.7-0.2,1
	c-3.2,9.6-12.5,19-28,19C12.2,106,1.6,96.8,1.6,81.8z M29.4,70.6c0-3.6-2.6-5.8-6.4-5.8c-7.1,0-13.2,7.4-13.1,15.9
	c0,0.5,0,1,0.1,1.6c1.1,0.1,2.3,0.2,3.4,0.2C21.7,82.5,29.4,78.3,29.4,70.6z"
    />
    <path
      fill="currentColor"
      d="M81,92.4c0-6.5,0.7-11.7,0.7-17.9c0-5.4-1.9-8.8-6.9-8.8c-10.7,0-16.6,20.5-16.6,32.3v4.7c0,1.4-0.7,2.2-2,2.2h-5
	c-1.5,0-2-0.8-2-2.3V36.3c0-1.7,0.6-2.3,2-2.3h5c1.2,0,2,0.7,2,2.2V55c0,5.7-0.6,17-0.8,19.2l0.4,0.1c2.8-8.1,9.5-16.4,19.1-16.4
	c9,0,14,4.9,14,13.9c0,3-0.7,10.5-0.7,17.5c0,5.5,2.2,8.8,6.8,8.8c6.6,0,11.8-8.8,14-14.5c0.2-0.5,0.4-0.7,0.8-0.7
	c0.7,0,4.9,2,4.9,2.9c0,0.3-0.1,0.7-0.2,1c-2.3,6.8-9.2,19-21.4,19C87.6,106,81,100.8,81,92.4z"
    />
    <path
      fill="currentColor"
      d="M127,100.3c-0.1-3,2.2-5.4,5.2-5.5c0.2,0,0.4,0,0.5,0c3.3,0,5.6,2,5.6,5.4c0.2,2.9-2,5.5-4.9,5.8c-0.3,0-0.6,0-0.8,0
	c-2.9,0.2-5.4-2-5.6-4.9C127,100.9,127,100.6,127,100.3z"
    />
  </svg>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
