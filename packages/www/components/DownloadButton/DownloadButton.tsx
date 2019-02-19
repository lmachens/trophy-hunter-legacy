import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';

interface IDownloadButtonProps extends ButtonProps {
  className?: string;
}

const DownloadButton: FunctionComponent<IDownloadButtonProps> = ({ className, ...props }) => {
  return (
    <form
      method="get"
      action="https://download.overwolf.com/install/Download?Channel=website2&PartnerId=3399"
      className={className}
    >
      <Button color="primary" type="submit" {...props}>
        Download App
      </Button>
    </form>
  );
};

export default DownloadButton;
