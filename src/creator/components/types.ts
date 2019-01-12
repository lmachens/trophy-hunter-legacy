export interface JSONEditorProps {
  json: any;
  mode: 'code' | 'form' | 'tree';
  onChange?(json: string): void;
}
