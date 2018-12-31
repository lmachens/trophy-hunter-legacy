import { Button } from './_Button';
import MUI_Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  body: {
    padding: '12px 24px'
  },
  noPaddingBody: {
    padding: 0,
    overflowY: 'hidden'
  },
  content: {
    maxHeight: 'none',
    maxWidth: 'none'
  },
  fullscreen: {
    maxHeight: 'calc(100% - 30px)',
    maxWidth: 'none',
    width: '100%',
    transform: 'none',
    position: 'absolute',
    bottom: 0
  },
  bodyFullscreen: {
    maxHeight: 'calc(100vh - 160px)'
  }
};

export const Dialog = ({
  actions,
  children,
  title,
  noPadding,
  fullscreen,
  onClose,
  open,
  ...other
}) => (
  <MUI_Dialog
    actions={actions || <Button label="Close" onClick={onClose} />}
    actionsContainerStyle={{ paddingRight: fullscreen ? 80 : 8 }}
    autoDetectWindowHeight={!fullscreen}
    autoScrollBodyContent={!fullscreen}
    bodyStyle={Object.assign(
      {},
      noPadding ? styles.noPaddingBody : styles.body,
      fullscreen && title ? styles.bodyFullscreen : {}
    )}
    contentStyle={fullscreen ? styles.fullscreen : styles.content}
    modal={false}
    onRequestClose={onClose}
    open={open}
    overlayStyle={fullscreen && styles.fullscreen}
    title={title}
    {...other}
  >
    {children}
  </MUI_Dialog>
);

Dialog.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node,
  fullscreen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  noPadding: PropTypes.bool
};
