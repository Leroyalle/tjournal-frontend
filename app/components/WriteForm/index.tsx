import React from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@mui/material';
import styles from './WriteForm.module.scss';
import { Button } from '@material-ui/core';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface IWriteForm {
  title?: string;
}

export const WriteForm: React.FC<IWriteForm> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={title}
        disableUnderline={true}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
