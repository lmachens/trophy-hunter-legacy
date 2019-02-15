import { Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

interface IDownloadButtonProps {
  className?: string;
}

const DownloadButton: FunctionComponent<IDownloadButtonProps> = ({ className }) => {
  return (
    <form
      method="get"
      action="https://download.overwolf.com/install/Download?Channel=website2&PartnerId=3399"
      className={className}
    >
      <Button variant="outlined" color="primary" type="submit">
        Download App
      </Button>
    </form>
  );
};

export default DownloadButton;
