import React from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

interface IEditorProps {
  onChange: (blocks: OutputData['blocks']) => void;
}

export const Editor: React.FC<IEditorProps> = ({ onChange }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи',
      async onChange() {
        const { blocks } = await editor.save();
        console.log(blocks);

        onChange(blocks);
      },
    });
  }, []);
  return <div id="editor" />;
};
