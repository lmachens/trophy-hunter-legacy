import { Button } from '@material-ui/core';
import React from 'react';

const DownloadButton = () => {
  return (
    <form
      method="get"
      action="https://download.overwolf.com/install/Download?Channel=website2&PartnerId=3399"
    >
      <Button variant="outlined" color="primary" type="submit">
        Download App
      </Button>
    </form>
  );
};

export default DownloadButton;
