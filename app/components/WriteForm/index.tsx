import React, { ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@mui/material';
import styles from './WriteForm.module.scss';
import { Button } from '@material-ui/core';
import { OutputData } from '@editorjs/editorjs';
import { Api } from '@/app/utils/api';
import { CreatePostDto } from '@/app/utils/api/types';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface IWriteForm {
  data?: any;
}

export const WriteForm: React.FC<IWriteForm> = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [blocks, setBlocks] = React.useState<OutputData['blocks']>([]);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const post = Api().post.create({
        title,
        body: blocks,
      });
      console.log(post);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        disableUnderline={true}
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button onClick={onAddPost} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
