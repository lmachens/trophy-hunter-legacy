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

const DataPrivacyPolicy = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant="h4">Privacy Policy</Typography>
      <Typography>
        Personal data (usually referred to just as "data" below) will only be processed by us to the
        extent necessary and for the purpose of providing a functional and user-friendly website,
        including its contents, and the services offered there.
        <br />
        Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation
        (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of
        operations such as collection, recording, organization, structuring, storage, adaptation,
        alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or
        otherwise making available, alignment, or combination, restriction, erasure, or destruction
        performed on personal data, whether by automated means or not.
        <br />
        The following privacy policy is intended to inform you in particular about the type, scope,
        purpose, duration, and legal basis for the processing of such data either under my own
        control or in conjunction with others. We also inform you below about the third-party
        components we use to optimize our website and improve the user experience which may result
        in said third parties also processing data they collect and control.
        <br />
        Our privacy policy is structured as follows:
        <br />
        I. Information about us as controllers of your data II. The rights of users and data
        subjects III. Information about the data processing
      </Typography>
      <Typography variant="h4">I. Information about us as controllers of your data</Typography>
      <Typography>
        The party responsible for this website (the "controller") for purposes of data protection
        law is:
        <br />
        <br />
      </Typography>
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
        E-Mail: leon@loltrophyhunter.com
      </Typography>
      <Typography variant="h4">II. The rights of users and data subjects</Typography>
      <Typography component="div">
        With regard to the data processing to be described in more detail below, users and data
        subjects have the right
        <ul>
          <li>
            to confirmation of whether data concerning them is being processed, information about
            the data being processed, further information about the nature of the data processing,
            and copies of the data (cf. also Art. 15 GDPR);
          </li>
          <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
          <li>
            to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or,
            alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR,
            to restrict said processing per Art. 18 GDPR;
          </li>
          <li>
            to receive copies of the data concerning them and/or provided by them and to have the
            same transmitted to other providers/controllers (cf. also Art. 20 GDPR);
          </li>
          <li>
            to file complaints with the supervisory authority if they believe that data concerning
            them is being processed by the controller in breach of data protection provisions (see
            also Art. 77 GDPR).
          </li>
        </ul>
        In addition, the controller is obliged to inform all recipients to whom it discloses data of
        any such corrections, deletions, or restrictions placed on processing the same per Art. 16,
        17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is
        impossible or involves a disproportionate effort. Nevertheless, users have a right to
        information about these recipients. Likewise, under Art. 21 GDPR, users and data subjects
        have the right to object to the controller's future processing of their data pursuant to
        Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose
        of direct advertising is permissible.
      </Typography>
      <Typography variant="h4">III. Information about the data processing</Typography>
      <Typography>
        Your data processed when using our website will be deleted or blocked as soon as the purpose
        for its storage ceases to apply, provided the deletion of the same is not in breach of any
        statutory storage obligations or unless otherwise stipulated below.
      </Typography>
    </Paper>
  );
};

export default DataPrivacyPolicy;
