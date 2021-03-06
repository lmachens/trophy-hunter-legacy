import JSONEditorLib from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import React, { FunctionComponent, useEffect, useRef } from 'react';

interface IJSONEditorProps {
  json: string;
}

const styles = {
  container: {
    flex: 1
  }
};

const JSONEditor: FunctionComponent<IJSONEditorProps> = ({ json, children, ...other }) => {
  const container = useRef(null);
  const jsoneditor = useRef(null);
  useEffect(() => {
    if (jsoneditor.current) {
      jsoneditor.current.update(json);
    } else {
      jsoneditor.current = new JSONEditorLib(container.current, other);
      jsoneditor.current.set(json);
    }
    return () => {
      // jsoneditor.current.destroy();
    };
  }, [json]);

  return <div ref={container} style={styles.container} />;
};

export default JSONEditor;
