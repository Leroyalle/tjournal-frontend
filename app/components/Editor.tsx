import React from 'react';
import EditorJS from '@editorjs/editorjs';

export const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи',
    });
  }, []);
  return <div id="editor" />;
};
