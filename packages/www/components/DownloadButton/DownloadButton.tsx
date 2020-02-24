import { Button, Link } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';
import { track } from 'utilities/matomo';

interface IDownloadButtonProps extends ButtonProps {
  className?: string;
}

const DownloadButton: FunctionComponent<IDownloadButtonProps> = ({ className, ...props }) => {
  const handleClick = () => {
    track({
      url: location.href,
      action_name: 'Download/App',
      download: 'https://download.overwolf.com/install/Download?PartnerId=3707'
    });
  };

  return (
    <Link
      color="secondary"
      href="https://download.overwolf.com/install/Download?PartnerId=3707"
      target="_blank"
    >
      <Button className={className} color="primary" type="submit" onClick={handleClick} {...props}>
        Download App
      </Button>
    </Link>
  );
};

export default DownloadButton;
