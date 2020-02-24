export interface JSONEditorProps {
  json?: any;
  text?: any;
  mode: 'code' | 'form' | 'tree';
  onChangeJSON?(json: string): void;
  onChangeText?(text: string): void;
  [key: string]: any;
}
