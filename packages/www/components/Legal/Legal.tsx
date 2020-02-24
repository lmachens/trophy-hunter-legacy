import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    padding: 20,
    margin: '10px auto'
  }
});

const Legal = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant="h4">Legal Notice</Typography>
      <Typography>Information in accordance with Section 5 TMG</Typography>
      <Typography>
        Leon Machens
        <br />
        Bismarckstr. 38
        <br />
        50672 Cologne
        <br />
        Germany
      </Typography>
      <Typography variant="h5">Contact</Typography>
      <Typography>
        Tel.: +49 176 6477 7468
        <br />
        E-Mail: leon.machens@gmail.com
      </Typography>
      <Typography variant="h4">Disclaimer</Typography>
      <Typography variant="h5">Liability for content</Typography>
      <Typography>
        The content of this site has been created with the greatest of care. I cannot, however,
        guarantee that the information in it is accurate, complete or up-to-date. As a service
        provider I am responsible under Section 6(1) of the German Media Services Inter-State
        Agreement and Section 8(1) of the German Teleservices Act for my own content on this site.
        Service providers are not however obliged to monitor third party information transmitted or
        stored on their site by them or to look for circumstances which may suggest a violation of
        the law. This does not affect my statutory obligations to remove or block the use of
        information. My liability in such cases shall however commence from the time I become aware
        of an actual violation. On becoming aware of such violations I shall remove this content
        immediately.
      </Typography>
      <Typography variant="h5">Liability for links</Typography>
      <Typography>
        This website contains links to external third-party websites, over the content of which I
        have no control. I cannot, therefore, make any guarantees regarding this third-party
        content. Responsibility for the content of linked sites lies solely with the provider or
        operator of the site concerned. All linked sites were checked for possible violations of the
        law when they were linked to mine. At that time I was not aware of any content which may
        violate the law. However, I cannot be expected to monitor the content of linked sites on an
        ongoing basis unless I have reason to suspect a violation of the law. On becoming aware of
        such a violation I shall remove the respective link immediately.
      </Typography>
      <Typography variant="h5">Copyright</Typography>
      <Typography>
        I make every effort to respect the copyrights of outside parties and to employ my own
        material and material in the public domain. All content and material on this site created by
        me is governed by German copyright law. Downloads and copies of this site may be made for
        private, non-commercial use only. Reproduction, processing, distribution and any form of
        exploitation beyond that permitted by copyright law requires the written consent of the
        author or creator concerned. Contributions by third parties are identified as such. Should
        anyone become aware of a possible copyright infringement, I kindly request that you inform
        me of such. Upon becoming aware of such a violation I shall remove the respective content
        immediately.
      </Typography>
    </Paper>
  );
};

export default Legal;
