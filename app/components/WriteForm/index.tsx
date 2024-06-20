import React, { ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@mui/material';
import styles from './WriteForm.module.scss';
import { Button } from '@material-ui/core';
import { OutputData } from '@editorjs/editorjs';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface IWriteForm {
  data?: any;
}

export const WriteForm: React.FC<IWriteForm> = () => {
  const [title, setTitle] = React.useState('');
  const [blocks, setBlocks] = React.useState<OutputData['blocks']>([]);

  return (
    <div>
      <Input
        value={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        disableUnderline={true}
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
