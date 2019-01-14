import React, { useEffect, useRef, FunctionComponent } from 'react';
import JSONEditorLib from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import { JSONEditorProps } from './types';

const styles = {
  container: {
    //width: '100%',
    //height: '100%',
    flex: 1
  }
};

const JSONEditor: FunctionComponent<JSONEditorProps> = ({ json, ...other }) => {
  const container = useRef(null);
  const jsoneditor = useRef(null);
  useEffect(
    () => {
      if (jsoneditor.current) {
        jsoneditor.current.update(json);
      } else {
        jsoneditor.current = new JSONEditorLib(container.current, other);
        jsoneditor.current.set(json);
      }
      return () => {
        //jsoneditor.current.destroy();
      };
    },
    [json]
  );

  return <div ref={container} style={styles.container} />;
};

export default JSONEditor;
