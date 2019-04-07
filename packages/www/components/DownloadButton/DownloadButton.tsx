import { Button, Link } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';

interface IDownloadButtonProps extends ButtonProps {
  className?: string;
}

const DownloadButton: FunctionComponent<IDownloadButtonProps> = ({ className, ...props }) => {
  return (
    <Link
      color="secondary"
      href="https://download.overwolf.com/install/Download?PartnerId=3707"
      target="_blank"
    >
      <Button className={className} color="primary" type="submit" {...props}>
        Download App
      </Button>
    </Link>
  );
};

export default DownloadButton;
